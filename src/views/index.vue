<template>
  <div class="index-page">
    <Header />

    <div class="content">
      <div class="welcome-card">
        <GoldWaveBackground />
        <div class="welcome-content">
          <div class="welcome-title">
            <WelcomeLogo />
          </div>
          <div class="welcome-subtitle">全球首个 AI 溯源应用链</div>
          <div class="welcome-description">数字文明的价值溯源网络</div>
        </div>
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

      <StrengthSection />

      <h2 class="partners-title">合作机构</h2>
      <PartnersWall />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import GoldWaveBackground from '@/components/GoldWaveBackground.vue'
import WelcomeLogo from '@/components/WelcomeLogo.vue'
import StrengthSection from '@/components/StrengthSection.vue'
import PartnersWall from '@/components/PartnersWall.vue'

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
  margin-bottom: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  animation: slideUp 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    // background: linear-gradient(to bottom, transparent, $bg-main);
    pointer-events: none;
    z-index: 0;
  }

  .welcome-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    mix-blend-mode: lighten;

    .welcome-title {
      width: 100%;
      text-align: center;
    }

    .welcome-subtitle {
      font-size: 22px;
      font-weight: 800;
      margin-top: 24px;
      background: linear-gradient(135deg, #C0C0C0 0%, #FFFFFF 50%, #A0A0A0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .welcome-description {
      margin-top: 16px;
      padding: 6px 24px;
      font-size: 14px;
      color: $brand-gold;
      background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent);
      display: inline-block;
      line-height: 1.5;
    }
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
    background: transparent;
    color: $brand-gold;
    font-size: 17px;
    font-weight: 500;
    border: 1px solid $brand-gold;
    border-radius: 24px;
    cursor: pointer;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 20px;
    transition: all 0.3s ease;

    &:hover {
      background: $gradient-gold;
      color: $text-inverse;
    }
}

.advantage-section {
  padding: 24px 20px;
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  margin-bottom: 32px;
  margin-top: 20px;
  border: 1px solid $border-color;

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
    background: rgba(212, 175, 55, 0.08);
    border-radius: 12px;
    border: 1px solid rgba(212, 175, 55, 0.25);
    margin-bottom: 24px;

    .ido-label {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }

    .ido-limit {
      font-size: 14px;
      color: $brand-gold;
    }
  }

  .ido-price {
    text-align: center;
    margin-bottom: 4px;

    .price-number {
      font-size: 36px;
      font-weight: bold;
      color: $brand-gold;
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
    background: transparent;
    color: $brand-gold;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid $brand-gold;
    border-radius: 24px;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      background: $gradient-gold;
      color: $text-inverse;
    }
  }
}

.nft-section {
  padding: 24px 20px;
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  margin-bottom: 32px;
  border: 1px solid $border-color;

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
    color: $brand-gold;
    margin: 0 0 12px 0;
  }

  .nft-desc {
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    font-size: 13px;
    color: $text-muted;
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
        color: $text-muted;
      }
    }

    .progress-text {
      font-size: 13px;
      color: $text-muted;
    }
  }
}

.partners-title {
  font-size: 21px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin: 30px 0 16px 0;
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
