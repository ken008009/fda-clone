# FDA NFT Platform

基于 Vue 3 + TypeScript 开发的 NFT 平台复刻项目

## 技术栈

- **框架**: Vue 3 + Vite
- **路由**: Vue Router 4
- **语言**: TypeScript
- **状态管理**: Pinia + pinia-plugin-persistedstate
- **UI 组件库**: Element Plus
- **Web3**: WalletConnect, MetaMask, Viem, Wagmi, Ethers
- **数据获取**: @tanstack/vue-query
- **工具库**: dayjs, decimal.js, big.js, socket.io-client, qrcode, zod

## 项目结构

```
fda-clone/
├── src/
│   ├── pages/              # 页面
│   │   ├── index/          # 首页（集成钱包连接）
│   │   └── community/      # 社区页
│   ├── stores/             # 状态管理
│   │   ├── wallet.ts       # 钱包状态
│   │   ├── user.ts         # 用户状态
│   │   ├── nft.ts          # NFT 状态
│   │   └── index.ts        # 导出
│   ├── composables/        # 组合式函数
│   │   └── useWallet.ts    # 钱包连接 hook
│   ├── config/             # 配置文件
│   │   └── web3.ts         # Web3 配置
│   ├── router/             # 路由配置
│   │   └── index.ts        # Vue Router 配置
│   ├── App.vue             # 根组件
│   └── main.ts             # 入口文件
├── static/                 # 静态资源
│   └── images/             # 图片资源
├── vite.config.ts          # Vite 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 依赖配置
```

## 已完成功能

- ✅ Vue 3 + TypeScript 项目搭建
- ✅ Vue Router 路由配置
- ✅ Pinia 状态管理集成（支持 localStorage 持久化）
- ✅ Web3 钱包连接（MetaMask）
- ✅ Element Plus UI 组件库集成
- ✅ 首页钱包连接功能
- ✅ 静态资源下载（advantage、partners 等图片）

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 下一步计划

- [ ] 完善 WalletConnect 集成
- [ ] 实现 NFT 市场功能
- [ ] 实现社区互动功能
- [ ] 添加更多页面和功能
