/**
 * 通用工具函数
 */

/**
 * 将地址格式化为缩写形式
 * @param address - 完整的以太坊地址
 * @param prefixLength - 保留的前缀长度，默认为 6
 * @param suffixLength - 保留的后缀长度，默认为 4
 * @returns 缩写后的地址，例如：0x123456...5678
 */
export function formatAddress(
  address: string | null | undefined,
  prefixLength: number = 6,
  suffixLength: number = 4
): string {
  if (!address) {
    return '0x1234...5678'
  }

  if (address.length <= prefixLength + suffixLength) {
    return address
  }

  return `${address.slice(0, prefixLength)}...${address.slice(-suffixLength)}`
}