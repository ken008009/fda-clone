export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

/**
 * 从 URL 中解析 UTM 参数
 */
export function parseUTMParams(): UTMParams {
  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_content: params.get('utm_content') || undefined,
    utm_term: params.get('utm_term') || undefined
  }
}

/**
 * 保存 UTM 参数到 localStorage
 */
export function saveUTMParams(params: UTMParams): void {
  if (Object.values(params).some(value => value !== undefined)) {
    localStorage.setItem('utm_params', JSON.stringify(params))
  }
}

/**
 * 从 localStorage 获取 UTM 参数
 */
export function getUTMParams(): UTMParams | null {
  const stored = localStorage.getItem('utm_params')
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return null
    }
  }
  return null
}

/**
 * 清除 UTM 参数
 */
export function clearUTMParams(): void {
  localStorage.removeItem('utm_params')
}

/**
 * 获取流量来源描述
 */
export function getSourceDescription(utmSource?: string): string {
  const sourceMap: Record<string, string> = {
    tokenpocket: 'TokenPocket 钱包',
    metamask: 'MetaMask 钱包',
    google: 'Google 搜索',
    facebook: 'Facebook',
    twitter: 'Twitter',
    telegram: 'Telegram',
    discord: 'Discord',
    email: '邮件营销',
    direct: '直接访问'
  }
  
  return sourceMap[utmSource || ''] || utmSource || '未知来源'
}
