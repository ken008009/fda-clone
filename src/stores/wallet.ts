import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface WalletProvider {
  request: (args: { method: string; params?: any[] }) => Promise<any>
  on: (event: string, callback: (...args: any[]) => void) => void
  removeListener: (event: string, callback: (...args: any[]) => void) => void
}

export interface WalletState {
  isConnected: boolean
  address: string | null
  chainId: number | null
  balance: string
  provider: WalletProvider | null
}

export const useWalletStore = defineStore(
  'wallet',
  () => {
    // 状态
    const isConnected = ref(false)
    const address = ref<string | null>(null)
    const chainId = ref<number | null>(null)
    const balance = ref('0')
    const provider = ref<WalletProvider | null>(null)

    // 计算属性
    const shortAddress = computed(() => {
      if (!address.value) return ''
      return `${address.value.slice(0, 6)}...${address.value.slice(-4)}`
    })

    // 方法
    const connect = async () => {
      try {
        if (typeof window !== 'undefined' && (window as any).ethereum) {
          provider.value = (window as any).ethereum as WalletProvider
          if (!provider.value) return

          const accounts = await provider.value.request({
            method: 'eth_requestAccounts'
          })
          address.value = accounts[0]
          isConnected.value = true

          // 获取链 ID
          const chainIdHex = await provider.value.request({
            method: 'eth_chainId'
          })
          chainId.value = parseInt(chainIdHex, 16)

          // 获取余额
          await updateBalance()

          // 监听账户变化
          provider.value.on('accountsChanged', handleAccountsChanged)
          provider.value.on('chainChanged', handleChainChanged)
        } else {
          alert('请安装 MetaMask 钱包')
        }
      } catch (error) {
        console.error('钱包连接失败:', error)
        alert('钱包连接失败')
      }
    }

    const disconnect = () => {
      isConnected.value = false
      address.value = null
      chainId.value = null
      balance.value = '0'

      if (provider.value) {
        provider.value.removeListener('accountsChanged', handleAccountsChanged)
        provider.value.removeListener('chainChanged', handleChainChanged)
        provider.value = null
      }
    }

    const updateBalance = async () => {
      if (!address.value || !provider.value) return

      try {
        const balanceHex = await provider.value.request({
          method: 'eth_getBalance',
          params: [address.value, 'latest']
        })
        const balanceWei = parseInt(balanceHex, 16)
        const balanceEth = balanceWei / 1e18
        balance.value = balanceEth.toFixed(4)
      } catch (error) {
        console.error('获取余额失败:', error)
      }
    }

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnect()
      } else {
        address.value = accounts[0]
      }
    }

    const handleChainChanged = (chainIdHex: string) => {
      chainId.value = parseInt(chainIdHex, 16)
      // 链变化后需要重新加载页面
      window.location.reload()
    }

    const switchChain = async (targetChainId: number) => {
      if (!provider.value) return

      try {
        await provider.value.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${targetChainId.toString(16)}` }]
        })
      } catch (error: any) {
        // 如果链不存在，尝试添加链
        if (error.code === 4902) {
          console.error('需要先添加该链')
        }
      }
    }

    return {
      // 状态
      isConnected,
      address,
      chainId,
      balance,
      provider,
      // 计算属性
      shortAddress,
      // 方法
      connect,
      disconnect,
      updateBalance,
      switchChain
    }
  },
  {
    persist: {
      key: 'wallet-store',
      storage: localStorage,
      paths: ['isConnected', 'address', 'chainId']
    }
  }
)
