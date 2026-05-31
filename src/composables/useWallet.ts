import { useWalletStore } from '@/stores/wallet'

export function useWallet() {
  const walletStore = useWalletStore()

  const connectWallet = async (): Promise<void> => {
    await walletStore.connect()
  }

  const disconnectWallet = (): void => {
    walletStore.disconnect()
  }

  const refreshBalance = async (): Promise<void> => {
    await walletStore.updateBalance()
  }

  return {
    // 状态
    isConnected: walletStore.isConnected,
    address: walletStore.address,
    shortAddress: walletStore.shortAddress,
    chainId: walletStore.chainId,
    balance: walletStore.balance,
    // 方法
    connectWallet,
    disconnectWallet,
    refreshBalance,
    switchChain: walletStore.switchChain
  }
}
