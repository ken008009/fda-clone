<template>
  <header class="app-header">
    <div class="header-container">
      <div class="header-left">
        <img src="/static/images/logo.png" alt="Logo" class="logo" />
      </div>
      <div class="header-right">
        <div class="language-selector" @click="handleLanguageClick">
          <img src="/static/images/language.png" alt="Language" class="language-icon" />
          <span class="language-text">{{ currentLanguage }}</span>
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
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(38, 2, 63, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(113, 39, 224, 0.2);

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $spacing-md $spacing-xl;
    max-width: 1200px;
    margin: 0 auto;

    .header-left {
      .logo {
        height: 40px;
        width: auto;
        object-fit: contain;
      }
    }

    .header-right {
      .language-selector {
        display: flex;
        align-items: center;
        gap: $spacing-xs;
        cursor: pointer;
        padding: $spacing-xs $spacing-sm;
        border-radius: $radius-sm;
        transition: background-color $transition-fast;

        &:hover {
          background-color: rgba(113, 39, 224, 0.2);
        }

        .language-icon {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }

        .language-text {
          font-size: 14px;
          color: #fff;
          font-weight: 500;
        }
      }
    }
  }
}

@media (max-width: $breakpoint-mobile) {
  .app-header {
    .header-container {
      padding: $spacing-sm $spacing-md;

      .header-left {
        .logo {
          height: 32px;
        }
      }

      .header-right {
        .language-selector {
          .language-icon {
            width: 18px;
            height: 18px;
          }

          .language-text {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
