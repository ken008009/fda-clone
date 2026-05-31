<template>
  <div class="mine-page">
    <Header />
    <div class="container">
      <div class="content">
        <p class="description">个人中心功能开发中...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.mine-page {
  min-height: 100vh;
  padding-top: 64px;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: $spacing-xl;
  }

  .content {
    .description {
      font-size: 16px;
      color: $text-primary;
      margin: 0;
    }
  }
}
</style>
