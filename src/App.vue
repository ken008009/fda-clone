<script setup lang="ts">
import { onMounted } from 'vue'
import Tabbar from '@/components/Tabbar.vue'
import { parseUTMParams, saveUTMParams, getUTMParams } from '@/utils/utm'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

onMounted(() => {
  // 解析 UTM 参数
  const utmParams = parseUTMParams()
  
  // 如果 URL 中有 UTM 参数，保存到 store 和 localStorage
  if (Object.values(utmParams).some(value => value !== undefined)) {
    saveUTMParams(utmParams)
    userStore.setUTMParams(utmParams)
  } else {
    // 如果 URL 中没有 UTM 参数，尝试从 localStorage 读取
    const storedParams = getUTMParams()
    if (storedParams) {
      userStore.setUTMParams(storedParams)
    }
  }
})
</script>

<template>
  <div id="app">
    <router-view />
    <Tabbar />
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
  padding-bottom: 60px;
}
</style>
