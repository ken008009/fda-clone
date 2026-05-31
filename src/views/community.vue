<template>
  <div class="community-page">
    <Header />
    <div class="container">
      <div class="info-card">
        <div class="user-row">
          <span class="address-tag">0x2e24...c33e</span>
          <span>等级:</span>
          <span class="level-text">F0</span>
        </div>

        <div class="stats-grid">
          <div class="stats-item">
            <span class="stats-num">0</span>
            <span class="stats-label">布道人数</span>
          </div>
          <div class="stats-item">
            <span class="stats-num">0</span>
            <span class="stats-label">有效用户</span>
          </div>
          <div class="stats-item">
            <span class="stats-num">0</span>
            <span class="stats-label">社区人数</span>
          </div>
          <div class="stats-item">
            <span class="stats-num">0.00 U</span>
            <span class="stats-label">累计收益</span>
          </div>
          <div class="stats-item">
            <span class="stats-num">0 U</span>
            <span class="stats-label">社区业绩</span>
          </div>
          <div class="stats-item">
            <span class="stats-num">0</span>
            <span class="stats-label">团队IDO总量</span>
          </div>
          <div class="stats-item">
            <span class="stats-num">0</span>
            <span class="stats-label">个人已赎回业绩</span>
          </div>
          <div class="stats-item relative">
            <span class="arrow-icon">></span>
            <span class="stats-num">0</span>
            <span class="stats-label">团队已赎回业绩</span>
          </div>
        </div>
      </div>

      <h3 class="list-title">布道列表</h3>

      <div class="table-card">
        <div class="table-header">
          <span>钱包地址</span>
          <span>用户等级</span>
          <span>个人业绩</span>
          <span>团队业绩</span>
        </div>
        <div class="empty-state">
          <p>暂无数据</p>
        </div>
      </div>

      <div class="safe-bottom"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<style lang="scss" scoped>
.community-page {
  min-height: 100vh;
  padding-top: 64px;
}

.container {
  padding: 0 15px;
}

.info-card {
  margin-top: 25px;
  padding: 12px 15px 35px;
  background-image: linear-gradient(180deg, rgba(42, 46, 60, 0.36), rgba(64, 62, 101, 0.4));
  border: 1px solid rgba(196, 119, 255, 0.25);
  border-radius: 10px;
}

.user-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #fff;

  .address-tag {
    padding: 4px 8px;
    background: #2F2768;
    border-radius: 8px;
    font-size: 10px;
  }

  .level-text {
    font-size: 13px;
    color: #BC68FF;
    font-weight: bold;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 15px;

  .stats-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    border: 1px solid #D5B1FF;
    border-radius: 6px;
    background: linear-gradient(156deg, #48286D 0%, #593484 52%, #48286D 100%);

    &.relative {
      position: relative;
    }

    .arrow-icon {
      position: absolute;
      top: 4px;
      right: 4px;
      font-size: 12px;
      color: #ccc;
    }

    .stats-num {
      font-size: 18px;
      font-weight: bold;
      color: #BC68FF;
    }

    .stats-label {
      margin-top: 7px;
      font-size: 13px;
      color: #fff;
      text-align: center;
    }
  }
}

.list-title {
  margin: 30px 0 0 0;
  font-size: 15px;
  color: #E9E9E9;
  text-align: center;
  font-weight: normal;
}

.table-card {
  margin-top: 15px;
  min-height: 300px;
  overflow: hidden;
  border: 1px solid rgba(196, 119, 255, 0.25);
  border-radius: 11px;
  background-image: linear-gradient(180deg, rgba(42, 46, 60, 0.36), rgba(64, 62, 101, 0.4));
  padding: 11px 0;

  .table-header {
    display: flex;
    align-items: center;
    background: #271D3D;
    padding: 8px 0;
    margin: -11px 0 0;

    span {
      flex: 1;
      text-align: center;
      font-size: 10px;
      color: #969AB1;
    }
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 250px;

    p {
      margin-top: 8px;
      font-size: 12px;
      color: #999;
    }
  }
}

.safe-bottom {
  height: 50px;
}
</style>
