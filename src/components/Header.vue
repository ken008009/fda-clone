<template>
  <header class="app-header">
    <div class="header-container">
      <div class="header-left">
        <img src="/static/images/logo.png" alt="Logo" class="logo" />
        <span>FDA</span>
      </div>
      <div class="header-right">
        <button class="connect-btn">连接钱包</button>
        <div class="language-selector" @click="handleLanguageClick">
          <img src="/static/images/language.png" alt="Language" class="language-icon" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentLanguage = ref('中文')

const handleLanguageClick = () => {
  // 切换语言逻辑
  currentLanguage.value = currentLanguage.value === '中文' ? 'English' : '中文'
}
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.app-header {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 414px;
  width: 100%;
  z-index: 999;
  background: rgba(38, 2, 63, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(113, 39, 224, 0.2);

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    max-width: 1200px;
    margin: 0 auto;

    .header-left {
      display: flex;
      align-items: center;
      gap: $spacing-sm;

      .logo {
        height: 30px;
        width: auto;
        object-fit: contain;
      }

      span {
        font-size: 12px;
        color: #fff;
      }
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 12px;

      .connect-btn {
        padding: 4px 14px;
        background: #652f76;
        color: #fff;
        border: none;
        border-radius: $radius-lg;
        font-size: 11px;
        font-weight: 500;
        cursor: pointer;
        transition: all $transition-fast;

        &:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        &:active {
          transform: translateY(0);
        }
      }

      .language-selector {
        display: flex;
        align-items: center;
        gap: 4px;

        .language-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
