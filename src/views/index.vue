<template>
  <div class="index-page">
    <Header />

    <div class="content">
      <div class="welcome-card">
        <GoldWaveBackground />
        <div class="welcome-content">
          <div class="welcome-title">
            <img src="/assets/logo.png" alt="Logo" class="logo" />
          </div>
          <div class="welcome-subtitle">{{ $t('index.welcomeSubtitle') }}</div>
          <div class="welcome-description">{{ $t('index.welcomeDescription') }}</div>
        </div>
      </div>

      <div class="features">
        <div v-for="(feature, index) in features" :key="index" class="feature-item">
          <div class="feature-bg">
            <img :src="feature.bg" :alt="feature.title" class="bg-image" />
            <div class="feature-content">
              <img :src="feature.icon" :alt="feature.title" class="feature-icon" />
              <div class="feature-title">{{ $t(feature.title) }}</div>
            </div>
          </div>
        </div>
      </div>
      <button class="start-button" @click="handleStart">{{ $t('index.startNow') }}</button>

      <div class="advantage-section">
        <div class="ido-header">
          <img src="/static/images/index/node-project.png" alt="" class="ido-icon" />
          <h2 class="ido-title">{{ $t('index.idoRecruitPlan') }}</h2>
        </div>
        <p class="ido-subtitle">{{ $t('index.idoSubtitle') }}</p>
        
        <div class="ido-card">
          <div class="ido-card-left">
            <span class="ido-label">{{ $t('index.idoRights') }}</span>
          </div>
          <div class="ido-card-right">
            <span class="ido-limit">{{ $t('index.limited', { count: 0 }) }}</span>
          </div>
        </div>

        <div class="ido-price">
          <span class="price-number">0</span>
          <span class="price-unit">{{ $t('index.usdtPerShare') }}</span>
        </div>
        <p class="ido-limit-text">{{ $t('index.accountLimit', { count: 0 }) }}</p>

        <div class="ido-benefits">
          <div v-for="(benefit, index) in benefits" :key="index" class="benefit-item">
            <img :src="benefit.icon" :alt="benefit.title" class="benefit-icon" />
            <div class="benefit-info">
              <h3 class="benefit-title">{{ $t(benefit.title) }}</h3>
              <p class="benefit-desc">{{ $t(benefit.desc) }}</p>
            </div>
          </div>
        </div>

        <button class="ido-btn">{{ $t('index.becomeIdo') }}</button>
      </div>

      <div class="nft-section">
        <div class="nft-header">
          <img src="/static/images/index/icon-nft-benefit.png" alt="" class="nft-icon" />
          <h2 class="nft-title">{{ $t('index.idoRecruitPlan') }}</h2>
        </div>
        <img src="/static/images/index/nft-benefits-module.png" :alt="$t('index.nftRights')" class="nft-image" />
        <p class="nft-hint">{{ $t('index.nftRequirement') }}</p>
        <p class="nft-desc">{{ $t('index.nftDesc') }}</p>
        <div class="nft-progress">
          <div class="progress-bar">
            <span class="progress-num"></span>
          </div>
          <span class="progress-text">{{ $t('index.nftProgress') }}</span>
        </div>
      </div>

      <StrengthSection />

      <h2 class="partners-title">{{ $t('index.partners') }}</h2>
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
    title: 'index.featureTitles[0]'
  },
  {
    bg: '/static/images/module-icon-bg-weJSvE3-.png',
    icon: '/static/images/index/module-icon.png',
    title: 'index.featureTitles[1]'
  },
  {
    bg: '/static/images/chart-icon-bg-yYEAC2yW.png',
    icon: '/static/images/index/chart-icon.png',
    title: 'index.featureTitles[2]'
  }
]

const benefits: BenefitItem[] = [
  {
    icon: '/static/images/index/advantage01.png',
    title: 'index.benefit_txfee',
    desc: 'index.benefit_txfeeDesc'
  },
  {
    icon: '/static/images/index/advantage02.png',
    title: 'index.benefit_profit',
    desc: 'index.benefit_profitDesc'
  },
  {
    icon: '/static/images/index/advantage03.png',
    title: 'index.benefit_referral',
    desc: 'index.benefit_referralDesc'
  },
  {
    icon: '/static/images/index/advantage04.png',
    title: 'index.benefit_airdrop',
    desc: 'index.benefit_airdropDesc'
  },
  {
    icon: '/static/images/index/advantage05.png',
    title: 'index.benefit_maker',
    desc: 'index.benefit_makerDesc'
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

      .logo {
        width: 200px;
        height: auto;
      }
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
