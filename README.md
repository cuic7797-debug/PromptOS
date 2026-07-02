# PromptOS v1.0 Commercial

> 国内最好用的免费 Prompt 工具。零 API 成本，完全免费。

## 功能特性

### 核心功能
- ✅ **Prompt Generator** — 结构化生成引擎（Role→Goal→Context→Task→Constraint→Output Format→Quality Check→AI Adapter）
- ✅ **Prompt Optimizer** — 五维度质量评分（清晰度/具体性/结构性/完整性/可执行性）+ 一键优化
- ✅ **Prompt Translator** — 中英互译 + 15个AI模型语言风格适配
- ✅ **模板中心** — 100+ 专业场景模板，覆盖21个分类
- ✅ **收藏 & 历史** — 完整的提示词管理系统
- ✅ **设置** — 主题切换、数据导出(JSON/CSV)、数据导入、清除数据

### 技术特性
- ✅ Vite 6 + React 19 + TypeScript 5.6 + Tailwind CSS 3.4
- ✅ 响应式布局（Mobile First）
- ✅ PWA 支持（可安装为桌面/手机应用）
- ✅ 零 API 成本（纯前端，localStorage + IndexedDB）
- ✅ 深色/浅色/跟随系统主题
- ✅ 快捷键支持

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 生产构建
npm run build
```

## 部署

### Vercel
```bash
npm run build
# 将 dist/ 目录部署到 Vercel
```

### Cloudflare Pages
```bash
npm run build
# 将 dist/ 目录部署到 Cloudflare Pages
```

### GitHub Pages
```bash
npm run build
# 将 dist/ 目录推送到 gh-pages 分支
```

## 模板分类

| 分类 | 数量 | 说明 |
|------|------|------|
| 电商 | 10 | 产品标题、详情页、直播话术、客服、选品等 |
| 短视频 | 5 | 抖音脚本、B站分镜、TikTok、YouTube、剪辑指令 |
| 小红书 | 2 | 种草文案、图文排版 |
| Midjourney | 4 | 摄影、产品设计、Logo、UI设计 |
| Stable Diffusion | 1 | 写实人像 |
| 代码 | 10 | Python、SQL、前端组件、API设计、架构、算法、DevOps、安全、性能、数据库 |
| 办公 | 10 | 邮件、PPT、会议纪要、项目汇报、合同、入职、团建、差旅、年终总结、发布会主持 |
| SEO | 8 | 文章大纲、关键词、诊断、本地SEO、迁移、视频SEO、E-E-A-T、内容策略 |
| 营销 | 10 | 品牌故事、竞品分析、内容日历、KOL、裂变、新品上市、联名、危机公关、年轻化、会员 |
| 学习 | 9 | 学习计划、知识卡片、论文、技能树、面试、错题、读书笔记、概念对比、思维导图 |
| 运营 | 9 | 问卷、活动、用户增长、社群、客服质检、排班、供应链、库存、仓库 |
| 写作 | 10 | 公众号、朋友圈、口播、小说、演讲、新闻稿、PRD、说明书、主持稿、剪辑指令 |

## 目录结构

```
promptos-v1.0/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── vite-env.d.ts
│   ├── types/
│   │   └── index.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── promptEngine.ts
│   ├── data/
│   │   └── templates.ts
│   ├── store/
│   │   └── appStore.ts
│   ├── hooks/
│   │   └── useMediaQuery.ts
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── MobileNav.tsx
│   └── pages/
│       ├── Dashboard.tsx
│       ├── Generator.tsx
│       ├── Optimizer.tsx
│       ├── Translator.tsx
│       ├── Templates.tsx
│       ├── Favorites.tsx
│       ├── History.tsx
│       └── Settings.tsx
└── public/
```

## 开源协议

MIT License
