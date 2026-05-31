import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UTMParams } from '@/utils/utm'

export interface UserInfo {
  id: string
  nickname: string
  avatar: string
  email?: string
  bio?: string
}

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<UserInfo | null>(null)
    const token = ref<string>('')
    const utmParams = ref<UTMParams | null>(null)

    const setUserInfo = (info: UserInfo) => {
      userInfo.value = info
    }

    const setToken = (newToken: string) => {
      token.value = newToken
    }

    const setUTMParams = (params: UTMParams) => {
      utmParams.value = params
    }

    const clearUserInfo = () => {
      userInfo.value = null
      token.value = ''
    }

    const isLogin = () => {
      return !!token.value
    }

    return {
      userInfo,
      token,
      utmParams,
      setUserInfo,
      setToken,
      setUTMParams,
      clearUserInfo,
      isLogin
    }
  },
  {
    persist: {
      key: 'user-store',
      storage: localStorage,
      paths: ['userInfo', 'token', 'utmParams']
    }
  }
)
