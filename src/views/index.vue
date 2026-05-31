<template>
  <div class="index-page">
    <Header />

    <div class="content">
      <div class="welcome-card">
        <div class="welcome-title">
          <span>Fuminda</span>
        </div>
        <div class="welcome-subtitle">web 3.0全链去中心化服务平台</div>
        <div class="welcome-description">基于BSC链的创新智能协议、提供RWA、聚合支付、Defi、链游等服务</div>
      </div>

      <div class="features">
        <div v-for="(feature, index) in features" :key="index" class="feature-item">
          <div class="feature-bg">
            <img :src="feature.bg" :alt="feature.title" class="bg-image" />
            <div class="feature-content">
              <img :src="feature.icon" :alt="feature.title" class="feature-icon" />
              <div class="feature-title">{{ feature.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <button class="start-button" @click="handleStart">立即开始</button>

      <div class="advantage-section">
        <div class="ido-header">
          <img src="/static/images/index/node-project.png" alt="" class="ido-icon" />
          <h2 class="ido-title">IDO招募计划</h2>
        </div>
        <p class="ido-subtitle">成为Fuminda IDO，享受交易税费分红、会员收益分红和推荐奖励</p>
        
        <div class="ido-card">
          <div class="ido-card-left">
            <span class="ido-label">IDO权益</span>
          </div>
          <div class="ido-card-right">
            <span class="ido-limit">限量0份</span>
          </div>
        </div>

        <div class="ido-price">
          <span class="price-number">0</span>
          <span class="price-unit">USDT/份</span>
        </div>
        <p class="ido-limit-text">单个账号限购 0 份</p>

        <div class="ido-benefits">
          <div v-for="(benefit, index) in benefits" :key="index" class="benefit-item">
            <img :src="benefit.icon" :alt="benefit.title" class="benefit-icon" />
            <div class="benefit-info">
              <h3 class="benefit-title">{{ benefit.title }}</h3>
              <p class="benefit-desc">{{ benefit.desc }}</p>
            </div>
          </div>
        </div>

        <button class="ido-btn">立即成为IDO</button>
      </div>

      <div class="nft-section">
        <div class="nft-header">
          <img src="/static/images/index/icon-nft-benefit.png" alt="" class="nft-icon" />
          <h2 class="nft-title">IDO招募计划</h2>
        </div>
        <img src="/static/images/index/nft-benefits-module.png" alt="NFT权益" class="nft-image" />
        <p class="nft-hint">需10个IDO获得NFT</p>
        <p class="nft-desc">成功推荐十份IDO即可获得一张限量NFT!享受做市商2%全球利润分红，NFT总发行300张</p>
        <div class="nft-progress">
          <div class="progress-bar">
            <span class="progress-num"></span>
          </div>
          <span class="progress-text">还需10份IDO获取NFT</span>
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
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'

const router = useRouter()

const handleStart = () => {
  router.push('/pledge')
}

interface FeatureItem {
  bg: string
  icon: string
  title: string
}

interface BenefitItem {
  icon: string
  title: string
  desc: string
}

const features: FeatureItem[] = [
  {
    bg: '/static/images/output-icon-bg-DIHWgt3w.png',
    icon: '/static/images/index/output-icon.png',
    title: '聚合支付'
  },
  {
    bg: '/static/images/module-icon-bg-weJSvE3-.png',
    icon: '/static/images/index/module-icon.png',
    title: '链游'
  },
  {
    bg: '/static/images/chart-icon-bg-yYEAC2yW.png',
    icon: '/static/images/index/chart-icon.png',
    title: 'RWA'
  }
]

const benefits: BenefitItem[] = [
  {
    icon: '/static/images/index/advantage01.png',
    title: '交易税费分红',
    desc: '获得交易买卖税各1%收益'
  },
  {
    icon: '/static/images/index/advantage02.png',
    title: '盈利税费分红',
    desc: '获得5%的盈利税费分红'
  },
  {
    icon: '/static/images/index/advantage03.png',
    title: '推荐奖励',
    desc: '推荐IDO可以获得10%的直推奖励'
  },
  {
    icon: '/static/images/index/advantage04.png',
    title: '代币空投',
    desc: '获得1050枚FDA代币空投，逐步释放'
  },
  {
    icon: '/static/images/index/advantage05.png',
    title: '做市商分红',
    desc: '获得3%做市商利润加权分红'
  }
]
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.index-page {
  min-height: 100vh;
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
  position: relative;
  z-index: 1;
}

.welcome-card {
  width: 100%;
  height: 400px;
  background: url('/static/images/index/pledge/hero-CvxrCMfG.png') no-repeat center;
  background-size: cover;
  margin-bottom: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 140px 0 0;
  animation: slideUp 0.3s ease;

  .welcome-title {
    span {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
      font-family: 'Bahnschrift', 'Arial', sans-serif;
    }
  }

  .welcome-subtitle {
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }

  .welcome-description {
    font-size: 13px;
    color: #fff;
    text-align: center;
    margin-top: 20px;
    padding: 0 60px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 1.6;
  }
}

.features {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 32px;

  .feature-item {
    position: relative;
    cursor: pointer;

    .feature-bg {
      position: relative;
      width: 95px;
      margin: 0 auto;

      .bg-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
      }
    }

    .feature-content {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translate(-50%, calc(-50% - 8px));

      .feature-icon {
        width: 46px;
        height: 46px;
        object-fit: contain;
      }

      .feature-title {
        margin-top: 6px;
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
      }
    }

  }
}

.start-button {
    width: 100%;
    padding: 12px 0;
    background: linear-gradient(180deg, #E689FF 0%, #C489FF 51%, #9399FF 100%);
    color: #000;
    font-size: 17px;
    font-weight: 500;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 20px;
}

.advantage-section {
  padding: 24px 20px;
  background-image: linear-gradient(180deg, rgba(42, 46, 60, .36), rgba(64, 62, 101, .4));
  border-radius: 24px;
  margin-bottom: 32px;
  margin-top: 20px;
  border: 1px solid rgba(113, 39, 224, 0.2);

  .ido-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;

    .ido-icon {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    .ido-title {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      margin: 0;
    }
  }

  .ido-subtitle {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
    margin: 0 0 16px 0;
    line-height: 1.5;
  }

  .ido-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: rgba(113, 39, 224, 0.1);
    border-radius: 12px;
    border: 1px solid rgba(113, 39, 224, 0.3);
    margin-bottom: 24px;

    .ido-label {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }

    .ido-limit {
      font-size: 14px;
      color: #C489FF;
    }
  }

  .ido-price {
    text-align: center;
    margin-bottom: 4px;

    .price-number {
      font-size: 36px;
      font-weight: bold;
      color: #C489FF;
    }

    .price-unit {
      font-size: 16px;
      color: #fff;
      margin-left: 4px;
    }
  }

  .ido-limit-text {
    text-align: center;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
    margin: 0 0 24px 0;
  }

  .ido-benefits {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;

    .benefit-item {
      display: flex;
      align-items: center;
      gap: 12px;

      .benefit-icon {
        width: 48px;
        height: 48px;
        object-fit: contain;
        flex-shrink: 0;
      }

      .benefit-info {
        .benefit-title {
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          margin: 0 0 4px 0;
        }

        .benefit-desc {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }
      }
    }
  }

  .ido-btn {
    width: 100%;
    padding: 14px 0;
    background: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    text-align: center;
  }
}

.nft-section {
  padding: 24px 20px;
  background-image: linear-gradient(180deg, rgba(42, 46, 60, .36), rgba(64, 62, 101, .4));
  border-radius: 24px;
  margin-bottom: 32px;
  border: 1px solid rgba(113, 39, 224, 0.2);

  .nft-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;

    .nft-icon {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    .nft-title {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      margin: 0;
    }
  }

  .nft-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    margin-bottom: 16px;
  }

  .nft-hint {
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    color: #903BFF;
    margin: 0 0 12px 0;
  }

  .nft-desc {
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    font-size: 13px;
    color: #EBEBEB;
    line-height: 1.6;
    margin: 0 0 16px 0;
    text-align: center;
  }

  .nft-progress {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .progress-bar {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 80px;
      height: 32px;
      background: url('/static/images/index/nft-referral-progress-bar.png') no-repeat center;
      background-size: cover;
      padding-right: 8px;

      .progress-num {
        font-size: 14px;
        color: #EBEBEB;
      }
    }

    .progress-text {
      font-size: 13px;
      color: #EBEBEB;
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
</style>
