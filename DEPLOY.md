# PromptOS 部署指南

## 推荐平台：Cloudflare Pages（国内访问快 + 无限带宽）

### 快速部署（5分钟）

#### 1. 本地准备
```bash
# 进入项目目录
cd promptos-v1.0

# 执行一键准备脚本（Mac/Linux）
chmod +x setup.sh
./setup.sh

# Windows 用户手动执行：
# npm install
# npm run build
```

#### 2. 推送到 GitHub
```bash
# 在 https://github.com/new 创建仓库，名字：promptos

git branch -M main
git remote add origin https://github.com/你的用户名/promptos.git
git push -u origin main
```

#### 3. Cloudflare 自动部署
1. 打开 https://dash.cloudflare.com
2. 左侧菜单 → **Pages** → **Create a project**
3. 点击 **Connect to Git**
4. 选择你的 `promptos` 仓库
5. 配置：
   - Build command: `npm run build`
   - Build output directory: `dist`
6. 点击 **Save and Deploy**

等待 1-2 分钟，访问分配的 `.pages.dev` 域名即可。

---

### 绑定自定义域名
1. Cloudflare Pages 项目 → **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入域名，按提示完成 DNS 配置

---

### 后续更新
```bash
# 修改代码后，只需：
git add .
git commit -m "更新内容"
git push origin main

# Cloudflare 自动检测并重新部署
```

---

## 备选方案：Vercel

如果你更熟悉 Vercel：

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录并部署
vercel login
vercel --prod
```

> ⚠️ Vercel 国内访问较慢，长期维护不推荐。

---

## 常见问题

### Q: 构建失败？
A: 检查 Node 版本 ≥ 18，本地先执行 `npm run build` 看是否成功。

### Q: 刷新页面 404？
A: 已配置 `public/_redirects` 文件，Cloudflare 会自动处理。如仍有问题，检查 Build output directory 是否为 `dist`。

### Q: 如何更新？
A: 修改代码 → `git push` → 自动部署。无需登录 Cloudflare。

### Q: 数据会丢失吗？
A: 用户数据存在浏览器 localStorage，与部署平台无关。建议定期在设置中导出 JSON 备份。
