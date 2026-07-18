# PromptOS v2.0

> 免费 AI 创业助手 + 提示词操作系统 + 内容生产工厂

PromptOS 是一个帮助用户从「想法 → AI分析 → 商业方案 → Prompt → AI工作流 → 执行结果」的一体化 AI 生产系统。

---

# 项目定位

PromptOS 不只是一个 Prompt 生成工具。

它的目标是：

让用户输入一个想法，通过 AI 完成：

```
用户想法

↓

AI任务分析

↓

行业分析

↓

用户画像

↓

商业执行方案

↓

专业Prompt

↓

AI工作流

↓

任务执行
```

最终成为一个免费的 AI 创业与内容生产平台。

---

# 当前版本

当前稳定版本：

```
285febd
```

当前阶段：

```
PromptOS V2 基础架构阶段
```

---

# 核心功能

## 1. AI创业任务分析器 Generator

状态：

✅ 已完成


功能：

- 用户需求分析
- 行业分析
- 用户画像
- 商业定位
- 营销方案
- 内容方向分析
- AI执行Prompt生成


示例：

输入：

```
我要卖动漫手办
```


输出：

```
产品定位

用户画像

营销方案

短视频方案

商品文案

AI执行Prompt
```

---

# 2. AI商业执行中心

状态：

✅ 已完成


功能：

- 商业方案展示
- 产品分析
- 用户画像
- 营销方案
- 短视频方案
- 商品文案
- Prompt展示
- 一键复制
- 下载Prompt

---

# 3. AI工作流中心 Workflow

状态：

✅ 第一版完成


功能：

- 接收 Generator 输入
- 自动带入用户需求
- 生成AI任务流程
- 工作流节点管理
- 查看执行Prompt
- 节点执行状态


流程：

```
Generator

↓

Workflow

↓

AI执行节点

↓

任务结果
```

---

# 原 PromptOS v1 功能

## Prompt Generator

结构化 Prompt 生成引擎：

```
Role

Goal

Context

Task

Constraint

Output Format

Quality Check

AI Adapter
```

---

## Prompt Optimizer

五维度质量评分：

- 清晰度
- 具体性
- 结构性
- 完整性
- 可执行性


---

## Prompt Translator

功能：

- 中英互译
- AI模型语言风格适配


---

## 模板中心

覆盖：

- 电商
- 短视频
- 小红书
- Midjourney
- Stable Diffusion
- 编程
- 办公
- SEO
- 营销
- 学习
- 运营
- 写作

---

# 技术栈

## 前端

- React 19
- TypeScript
- Vite 6
- Tailwind CSS


## 状态管理

- Zustand


## 路由

- React Router


## 图标

- Lucide React


## 部署

- Cloudflare Pages


## 数据

- localStorage
- IndexedDB


## 应用能力

- PWA支持
- 响应式布局
- 移动端适配

---

# 本地开发

安装依赖：

```bash
npm install
```


启动：

```bash
npm run dev
```


生产构建：

```bash
npm run build
```

---

# Git 开发规范

GitHub 是唯一代码中心。


## 开始工作

每天打开电脑：

```bash
git pull
```


查看状态：

```bash
git status
```


---

## 完成工作

提交：

```bash
git add .

git commit -m "描述修改"

git push
```

---

# 双电脑开发规则

支持：

- 电脑A开发
- 电脑B开发


正确流程：

电脑A：

```
修改

↓

git commit

↓

git push
```


电脑B：

```
git pull

↓

继续开发
```


禁止：

- 复制项目文件
- 压缩包同步
- 直接覆盖项目目录

---

# 开发注意事项

修改代码后：

先运行：

```bash
npm run build
```

确认通过后再提交。


不要让 AI 自动：

```
修改代码

↓

直接 push main
```

所有修改需要先检查：

- build 是否通过
- 功能是否正常
- Git diff 是否正确

---

# 下一阶段规划

## Workflow 2.0

目标：

从工作流系统升级为 AI 自动执行系统。


计划：

```
用户需求

↓

任务拆解

↓

AI节点

↓

模型执行

↓

结果汇总
```


AI节点：

```
市场分析

↓

用户画像

↓

内容生产

↓

商品文案

↓

营销方案
```

---

# 免费模型方向

目标：

0成本运行。


方向：

- DeepSeek
- Qwen
- 本地开源模型

---

# 商业化方向

PromptOS 定位：

```
免费 AI 创业助手

+

提示词操作系统

+

内容生产工厂
```

未来支持：

- AI创业方案生成
- 内容生产
- 电商运营
- 视频营销
- 自动化工作流

---

# 项目历史

## PromptOS v1

Prompt工具阶段：

完成：

✅ Prompt生成

✅ Prompt优化

✅ Prompt翻译

✅ 模板系统


---

## PromptOS v2

AI生产系统阶段：

完成：

✅ AI任务分析器

✅ 商业执行方案

✅ Prompt结果中心

✅ AI Workflow基础系统


---

# License

MIT License