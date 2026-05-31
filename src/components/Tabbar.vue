<template>
  <div class="tabbar">
    <div
      v-for="tab in tabs"
      :key="tab.path"
      class="tab-item"
      :class="{ active: isActive(tab.path) }"
      @click="handleTabClick(tab.path)"
    >
      <img :src="isActive(tab.path) ? tab.activeIcon : tab.icon" :alt="tab.name" />
      <span class="tab-label">{{ tab.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

interface TabItem {
  path: string
  name: string
  icon: string
  activeIcon: string
}

const tabs: TabItem[] = [
  {
    path: '/index',
    name: '首页',
    icon: '/static/tabbar/home.png',
    activeIcon: '/static/tabbar/home-active.png'
  },
  {
    path: '/community',
    name: '社区',
    icon: '/static/tabbar/community.png',
    activeIcon: '/static/tabbar/community-active.png'
  },
  {
    path: '/pledge',
    name: '质押',
    icon: '/static/tabbar/pledge.png',
    activeIcon: '/static/tabbar/pledge-active.png'
  },
  {
    path: '/mine',
    name: '我的',
    icon: '/static/tabbar/mine.png',
    activeIcon: '/static/tabbar/mine-active.png'
  }
]

const route = useRoute()
const router = useRouter()

const isActive = (path: string) => {
  return route.path === path
}

const handleTabClick = (path: string) => {
  if (route.path !== path) {
    router.push(path)
  }
}
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #26023f;
  padding: $spacing-sm 0;
  z-index: 1000;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);

  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-xs;
    cursor: pointer;
    transition: all $transition-fast;
    padding: $spacing-xs $spacing-lg;

    img {
      width: 27px;
      height: 27px;
      object-fit: contain;
      transition: transform $transition-fast;
    }

    .tab-label {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.6);
      transition: color $transition-fast;
    }

    &.active {
      img {
        transform: scale(1.1);
      }

      .tab-label {
        color: #7127E0;
        font-weight: 500;
      }
    }

    &:hover {
      .tab-label {
        color: $text-secondary;
      }
    }
  }
}

@media (max-width: $breakpoint-mobile) {
  .tabbar {
    padding: $spacing-xs 0;

    .tab-item {
      padding: $spacing-xs $spacing-md;

      img {
        width: 20px;
        height: 20px;
      }

      .tab-label {
        font-size: 11px;
      }
    }
  }
}
</style>
