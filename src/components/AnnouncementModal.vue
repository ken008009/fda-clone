<template>
  <Teleport to="body">
    <div v-if="visible" class="announcement-overlay" @click="handleClose">
      <div class="announcement-modal" @click.stop>
        <div class="modal-close" @click="handleClose">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>

        <h1 class="modal-title">{{ $t('announcement.title') }}</h1>
        <h2 class="modal-subtitle">Benefer 战略升级新系统正式上线</h2>

        <div class="modal-content">
          <p>随着 Benefer 战略升级全面完成，全新系统现已正式上线运行。</p>
          <p><br /></p>
          <p>本次升级，不仅是系统层面的重构与优化，更是 Benefer 面向全球化生态布局的重要里程碑。</p>
          <p><br /></p>
          <p><strong>一、战略升级完成</strong></p>
          <p>生态体系更加科学稳健</p>
          <p><br /></p>
          <p>本次系统围绕：</p>
          <p>• 资产协同</p>
          <p>• 价值承接</p>
          <p>• 流通效率</p>
          <p>• 风控机制</p>
          <p>• 生态增长模型</p>
          <p><br /></p>
          <p>进行了全面优化升级。</p>
          <p>系统整体运行逻辑进一步完善，</p>
          <p>生态结构更加稳定，</p>
          <p>资产循环效率与长期承载能力同步增强。</p>
          <p><br /></p>
          <p><strong>二、BEF 基金会联合日本财团战略注资 3000 万 USDT</strong></p>
          <p><br /></p>
          <p>为进一步推动 Benefer 全球化发展，BEF 基金会已联合日本财团完成 3000 万 USDT 战略注资。</p>
          <p><br /></p>
          <p>其中：</p>
          <p>• 1000 万 USDT 将用于生态底池扩容</p>
          <p>进一步增强市场深度与生态稳定性</p>
          <p><br /></p>
          <p>• 2000 万 USDT 将全部用于市值管理</p>
          <p>持续强化整体价值体系与市场承接能力</p>
          <p><br /></p>
          <p>本次战略资金注入，将进一步提升 Benefer 生态抗风险能力与长期增长空间。</p>
          <p><br /></p>
          <p><strong>三、ENI 生态即将迎来全面爆发</strong></p>
          <p>Benefer 正式开启全新征程</p>
          <p><br /></p>
          <p>随着 ENI 公链生态持续推进，Benefer 将全面协同 ENI 生态体系，进一步拓展全球市场与生态应用场景。</p>
          <p><br /></p>
          <p>新系统的正式上线，标志着 Benefer 已正式进入全新的战略发展阶段。</p>
          <p><br /></p>
          <p>新的征程已经开启，新的生态格局正在形成。</p>
          <p><br /></p>
          <p>让我们共同迎接 Benefer 与 ENI 生态的新辉煌。</p>
          <p><br /></p>
          <p>Benefer 基金会</p>
          <p>2026.05.21</p>
        </div>

        <div class="modal-footer">
          <button class="confirm-btn" @click="handleClose">{{ $t('announcement.confirm') }}</button>
          <p class="no-remind" @click="handleNoRemind">{{ $t('announcement.noRemind') }}</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const visible = ref(false)
const STORAGE_KEY = 'announcement_dismissed'

onMounted(() => {
  const dismissed = localStorage.getItem(STORAGE_KEY)
  if (!dismissed) {
    visible.value = true
  }
})

watch(() => visible.value, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

const handleClose = () => {
  visible.value = false
}

const handleNoRemind = () => {
  localStorage.setItem(STORAGE_KEY, 'true')
  visible.value = false
}
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.announcement-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
}

.announcement-modal {
  position: relative;
  width: 90%;
  max-width: 360px;
  max-height: 70vh;
  background: $bg-card;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(160, 130, 25, 0.85);
  box-shadow: 0 0 16px rgba(212, 175, 55, 0.15), 0 8px 32px rgba(0, 0, 0, 0.5);

  .modal-close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
    color: $text-muted;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: $text-primary;
    }
  }

  .modal-title {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin: 0 0 8px;
  }

  .modal-subtitle {
    font-size: 14px;
    font-weight: normal;
    color: $brand-gold;
    text-align: center;
    margin: 0 0 16px;
  }

  .modal-content {
    flex: 1;
    overflow-y: auto;
    max-height: 50vh;
    padding: 0 4px;
    margin-bottom: 16px;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2px;
    }

    p {
      margin: 0 0 4px;
      font-size: 13px;
      color: $text-muted;
      line-height: 1.6;
      white-space: pre-wrap;
    }

    strong {
      color: #fff;
    }
  }

  .modal-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .confirm-btn {
      width: 100%;
      padding: 12px 0;
      background: rgba(212, 175, 55, 0.05);
      color: $brand-gold;
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 1px;
      border: 2px solid $brand-gold;
      border-radius: 24px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: $gradient-gold;
        color: $text-inverse;
        box-shadow: 0 0 12px rgba(212, 175, 55, 0.4);
      }

      &:active {
        transform: scale(0.98);
      }
    }

    .no-remind {
      margin: 0;
      font-size: 13px;
      color: $text-muted;
      cursor: pointer;
      text-decoration: underline;

      &:hover {
        color: $text-primary;
      }
    }
  }
}
</style>
