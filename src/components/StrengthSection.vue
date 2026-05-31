<template>
  <div class="strength-section">
    <h2 class="section-title">优势</h2>
    <div ref="listRef" class="strength-list">
      <div v-for="(card, index) in cards" :key="index" class="strength-card">
        <div class="card-border">
          <div class="card-tag">{{ card.tag }}</div>
          <div class="card-inner">
            <img :src="card.illustration" :alt="card.tag" class="card-illustration" />
            <img :src="card.icon" :alt="card.tag" class="card-icon" />
            <p class="card-desc">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface StrengthCard {
  tag: string
  illustration: string
  icon: string
  desc: string
}

const cards: StrengthCard[] = [
  {
    tag: '高效收益',
    illustration: '/static/images/index/advantage/illustration-revenue-growth.png',
    icon: '/static/images/index/advantage/icon-revenue-up.png',
    desc: '优化的收益算法，提供行业领先的质押回报率'
  },
  {
    tag: '透明公开',
    illustration: '/static/images/index/advantage/illustration-data-transparent.png',
    icon: '/static/images/index/advantage/icon-transparent-link.png',
    desc: '所有交易和收益数据上链可查，完全透明公开'
  },
  {
    tag: '安全可靠',
    illustration: '/static/images/index/advantage/illustration-security-shield.png',
    icon: '/static/images/index/advantage/icon-security-lock.png',
    desc: '基于BSC链的智能合约确保资产安全'
  }
]

const listRef = ref<HTMLDivElement>()
let timer: ReturnType<typeof setInterval> | null = null
let currentIndex = 0

onMounted(() => {
  const list = listRef.value
  if (!list) return

  const cardWidth = list.scrollWidth / cards.length
  const containerWidth = list.clientWidth
  const scrollToCenter = (index: number) => {
    const targetScrollLeft = cardWidth * index - (containerWidth - cardWidth) / 2
    list.scrollTo({ left: targetScrollLeft, behavior: 'smooth' })
  }

  scrollToCenter(0)

  timer = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length
    scrollToCenter(currentIndex)
  }, 3000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style lang="scss" scoped>
.strength-section {
  margin-bottom: 32px;

  .section-title {
    font-size: 21px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin: 0 0 20px 0;
  }

  .strength-list {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    padding: 20px 20px 0;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }

    .strength-card {
      flex: 0 0 60%;
      height: 280px;
      scroll-snap-align: center;

      .card-border {
        position: relative;
        padding: 2px;
        background: linear-gradient(180deg, #E588FE 0%, #9298FF 100%);
        border-radius: 20px;
        height: 100%;
      }

      .card-tag {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        padding: 6px 24px;
        background: linear-gradient(180deg, #E689FF 0%, #C489FF 51%, #9399FF 100%);
        color: #000;
        font-size: 13px;
        font-weight: 800;
        border-radius: 20px;
        z-index: 2;
        white-space: nowrap;
      }

      .card-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background: #000;
        border-radius: 18px;
        padding: 0 0 20px;
        overflow: hidden;
        height: calc(100% - 4px);

        .card-illustration {
          width: 100%;
          height: 140px;
          object-fit: contain;
          margin-bottom: 8px;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          object-fit: contain;
          margin-bottom: 12px;
        }

        .card-desc {
          font-size: 12px;
          color: #AFAABF;
          text-align: center;
          margin: 0;
          line-height: 1.5;
          padding: 0 8px;
        }
      }
    }
  }
}
</style>
