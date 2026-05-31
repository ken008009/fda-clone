<template>
  <div class="index-page">
    <Header />

    <div class="content">
      <div class="welcome-card">
        <h2 class="welcome">欢迎使用 FDA NFT 平台</h2>
        <p class="subtitle">基于 Vue 3 + Web3 构建</p>
      </div>

      <div class="features">
        <div class="feature-item">
          <h3 class="feature-title">钱包连接</h3>
          <p class="feature-desc">支持 MetaMask 等主流钱包</p>
        </div>
        <div class="feature-item">
          <h3 class="feature-title">NFT 市场</h3>
          <p class="feature-desc">浏览和交易 NFT 资产</p>
        </div>
        <div class="feature-item">
          <h3 class="feature-title">社区互动</h3>
          <p class="feature-desc">与社区成员交流互动</p>
        </div>
      </div>

      <div class="advantage-section">
        <h2 class="section-title">平台优势</h2>
        <div class="advantage-grid">
          <div class="advantage-card">
            <div class="advantage-icon">
              <img src="/static/images/index/advantage/icon-revenue-up.png" alt="收益增长" />
            </div>
            <h3 class="advantage-title">收益增长</h3>
            <p class="advantage-desc">多种收益模式，持续增长</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">
              <img src="/static/images/index/advantage/icon-security-lock.png" alt="安全可靠" />
            </div>
            <h3 class="advantage-title">安全可靠</h3>
            <p class="advantage-desc">银行级安全保障</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">
              <img src="/static/images/index/advantage/icon-transparent-link.png" alt="透明公开" />
            </div>
            <h3 class="advantage-title">透明公开</h3>
            <p class="advantage-desc">链上数据完全透明</p>
          </div>
        </div>
      </div>

      <div class="partners-section">
        <h2 class="section-title">合作伙伴</h2>
        <div class="partners-grid">
          <div v-for="i in 10" :key="i" class="partner-logo">
            <img :src="`/static/images/index/partners/partner-${i}.png`" :alt="`合作伙伴 ${i}`" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import '@/styles/index.scss'
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.index-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow-x: hidden;
  padding-top: 64px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/static/images/index/chart-icon.png') no-repeat center;
    background-size: cover;
    opacity: 0.1;
    pointer-events: none;
  }
}

.content {
  padding: 32px;
  position: relative;
  z-index: 1;
}

.welcome-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  padding: 48px 32px;
  margin-bottom: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  animation: slideUp 0.3s ease;

  .welcome {
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin: 0 0 16px 0;
  }

  .subtitle {
    font-size: 16px;
    color: #666;
    margin: 0;
  }
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;

  .feature-item {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    animation: slideUp 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    }

    .feature-title {
      font-size: 20px;
      font-weight: bold;
      color: #333;
      margin: 0 0 8px 0;
    }

    .feature-desc {
      font-size: 14px;
      color: #666;
      margin: 0;
      line-height: 1.6;
    }
  }
}

.advantage-section {
  padding: 48px 0;
  background: #fff;
  border-radius: 24px;
  margin-bottom: 32px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  .section-title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin: 0 0 32px 0;
  }

  .advantage-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    padding: 0 32px;

    .advantage-card {
      text-align: center;
      padding: 24px;

      .advantage-icon {
        width: 80px;
        height: 80px;
        margin: 0 auto 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;

        img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }
      }

      .advantage-title {
        font-size: 18px;
        font-weight: bold;
        color: #333;
        margin: 0 0 8px 0;
      }

      .advantage-desc {
        font-size: 14px;
        color: #666;
        margin: 0;
        line-height: 1.6;
      }
    }
  }
}

.partners-section {
  padding: 48px 0;

  .section-title {
    font-size: 28px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin: 0 0 32px 0;
  }

  .partners-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 24px;
    padding: 0 24px;

    .partner-logo {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      img {
        max-width: 100%;
        max-height: 60px;
        object-fit: contain;
      }
    }
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 16px;

    .title {
      font-size: 20px;
    }
  }

  .content {
    padding: 16px;
  }

  .welcome-card {
    padding: 24px 16px;

    .welcome {
      font-size: 24px;
    }
  }

  .features {
    grid-template-columns: 1fr;
  }

  .advantage-section {
    padding: 24px 0;
    margin-bottom: 24px;

    .section-title {
      font-size: 22px;
    }

    .advantage-grid {
      grid-template-columns: 1fr;
      padding: 0 16px;
    }
  }

  .partners-section {
    padding: 24px 0;

    .section-title {
      font-size: 22px;
    }

    .partners-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
  }
}
</style>
