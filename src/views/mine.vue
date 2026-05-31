<template>
  <div class="mine-page">
    <Header />
    <div class="container">
      <div class="airdrop-card">
        <div class="card-bg"></div>
        <div class="card-content">
          <div class="card-header">
            <img src="/static/images/logo.png" alt="FDA" class="card-logo" />
            <h2 class="card-title">代币空投</h2>
          </div>

          <div class="stats-list">
            <div class="stats-row">
              <span class="stats-name">可领取金额</span>
              <span class="stats-value green">0 FDA</span>
            </div>
            <div class="stats-row">
              <span class="stats-name">待释放金额</span>
              <span class="stats-value yellow">0 FDA</span>
            </div>
            <div class="stats-row">
              <span class="stats-name">已领取金额</span>
              <span class="stats-value green">0 FDA</span>
            </div>
            <div class="stats-row">
              <span class="stats-name">总节点数</span>
              <span class="stats-value yellow">0</span>
            </div>
            <div class="stats-row">
              <span class="stats-name">释放倒计时</span>
              <span class="stats-value purple">无</span>
            </div>
          </div>

          <button class="claim-btn">领取空投</button>
        </div>
        <div class="deco-circle top"></div>
        <div class="deco-circle bottom"></div>
      </div>

      <div class="record-section">
        <div class="section-title-wrap">
          <div class="title-bar"></div>
          <h3 class="section-title">领取记录</h3>
        </div>

        <div class="table-card">
          <div class="table-header">
            <span>时间</span>
            <span>金额</span>
          </div>
          <div class="empty-state">
            <p>暂无数据</p>
          </div>
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
.mine-page {
  min-height: 100vh;
  padding-top: 64px;
}

.container {
  padding: 0 15px;
}

.airdrop-card {
  position: relative;
  margin-top: 25px;
  overflow: hidden;
  border-radius: 12px;

  .card-bg {
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, #8A4F98 0%, #3A1F4A 100%);
  }

  .card-content {
    position: relative;
    z-index: 10;
    padding: 20px;
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .card-logo {
      width: 25px;
      height: 25px;
      border-radius: 10px;
    }

    .card-title {
      margin: 0 0 0 8px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
  }

  .stats-list {
    margin-bottom: 10px;

    .stats-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      padding: 10px;
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.2);

      &:last-child {
        margin-bottom: 0;
      }

      .stats-name {
        font-size: 14px;
        color: #fff;
      }

      .stats-value {
        font-size: 16px;
        font-weight: bold;

        &.green {
          color: #66E3C9;
        }

        &.yellow {
          color: #EEDC7B;
        }

        &.purple {
          color: #BC68FF;
        }
      }
    }
  }

  .claim-btn {
    width: 100%;
    margin-top: 10px;
    padding: 11px 0;
    background: linear-gradient(135deg, #F5C359 0%, #D4A64D 40%, #B8823C 100%);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    text-align: center;
    transition: transform 0.15s ease;

    &:active {
      transform: scale(0.95);
    }
  }

  .deco-circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);

    &.top {
      top: 0;
      right: 0;
      width: 100px;
      height: 100px;
      transform: translate(50%, -50%);
    }

    &.bottom {
      bottom: 0;
      left: 0;
      width: 75px;
      height: 75px;
      transform: translate(-50%, 50%);
      background: rgba(255, 255, 255, 0.03);
    }
  }
}

.record-section {
  margin-top: 20px;

  .section-title-wrap {
    position: relative;
    margin-bottom: 10px;
    margin-left: 10px;
    display: flex;
    align-items: center;

    .title-bar {
      position: absolute;
      left: -10px;
      top: 50%;
      width: 4px;
      height: 16px;
      border-radius: 2px;
      background: linear-gradient(180deg, #8A4F98 0%, #3A1F4A 100%);
      transform: translateY(-50%);
    }

    .section-title {
      margin: 0 0 0 8px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
  }
}

.table-card {
  margin-top: 10px;
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
