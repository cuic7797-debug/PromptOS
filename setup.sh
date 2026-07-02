#!/bin/bash
set -e

echo "🚀 PromptOS 一键部署准备脚本"
echo "=============================="

# 检查 Node 版本
NODE_VERSION=$(node -v 2>/dev/null || echo "none")
if [ "$NODE_VERSION" = "none" ]; then
    echo "❌ 未检测到 Node.js，请先安装：https://nodejs.org"
    exit 1
fi
echo "✅ Node.js 版本: $NODE_VERSION"

# 安装依赖
echo "📦 安装依赖..."
npm install

# 本地构建测试
echo "🔨 本地构建测试..."
npm run build

if [ ! -d "dist" ]; then
    echo "❌ 构建失败，dist 目录不存在"
    exit 1
fi
echo "✅ 构建成功"

# 检查必要文件
if [ ! -f "public/_redirects" ]; then
    echo "⚠️  创建路由修复文件..."
    mkdir -p public
    echo "/* /index.html 200" > public/_redirects
fi

# Git 初始化
echo "📁 初始化 Git..."
if [ ! -d ".git" ]; then
    git init
    git add .
    git commit -m "PromptOS v1.0 - Initial commit"
    echo "✅ Git 初始化完成"
else
    echo "✅ Git 已初始化"
fi

echo ""
echo "=============================="
echo "✅ 准备完成！下一步："
echo ""
echo "1. 在 GitHub 创建仓库：https://github.com/new"
echo "   仓库名: promptos"
echo ""
echo "2. 推送代码:"
echo "   git branch -M main"
echo "   git remote add origin https://github.com/你的用户名/promptos.git"
echo "   git push -u origin main"
echo ""
echo "3. 在 Cloudflare 部署:"
echo "   https://dash.cloudflare.com → Pages → Create a project"
echo "   选择你的 promptos 仓库"
echo "   Build command: npm run build"
echo "   Build output directory: dist"
echo ""
echo "🎉 完成！"
