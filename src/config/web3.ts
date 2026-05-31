// Web3 配置
export const WEB3_CONFIG = {
  // WalletConnect 项目 ID（需要替换为实际的 Project ID）
  walletConnectProjectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  
  // 支持的链
  chains: {
    ethereum: {
      chainId: 1,
      name: 'Ethereum',
      rpcUrls: ['https://eth.llamarpc.com'],
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
      }
    },
    polygon: {
      chainId: 137,
      name: 'Polygon',
      rpcUrls: ['https://polygon-rpc.com'],
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18
      }
    }
  }
}

export default WEB3_CONFIG
