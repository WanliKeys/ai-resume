# 🚀 部署指南

## Vercel 一键部署（推荐）

### 方法1: 通过Vercel CLI
```bash
# 安装Vercel CLI
npm i -g vercel

# 登录Vercel
vercel login

# 部署项目
vercel

# 配置环境变量
vercel env add OPENAI_API_KEY
vercel env add OPENAI_MODEL
```

### 方法2: 通过GitHub集成
1. 将代码推送到GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "Import Project"
4. 选择你的GitHub仓库
5. 配置环境变量：
   - `OPENAI_API_KEY`: 你的OpenAI API密钥
   - `OPENAI_MODEL`: gpt-4-turbo-preview (可选)

### 方法3: 一键部署按钮
点击下面的按钮直接部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fai-resume&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20Key%20for%20AI%20chat%20functionality)

## 其他部署平台

### Netlify
```bash
# 构建项目
npm run build

# 安装Netlify CLI
npm i -g netlify-cli

# 部署
netlify deploy --prod --dir=.next
```

### Railway
1. 连接GitHub仓库
2. 设置环境变量
3. 自动部署

### Digital Ocean App Platform
1. 创建新应用
2. 连接GitHub
3. 配置构建命令：`npm run build`
4. 配置启动命令：`npm start`

## 环境变量配置

所有平台都需要配置以下环境变量：

```env
OPENAI_API_KEY=sk-xxx...xxx
OPENAI_MODEL=gpt-4-turbo-preview
```

## 自定义域名

### Vercel
1. 在项目设置中添加域名
2. 配置DNS记录指向Vercel

### 其他平台
参考各平台的域名配置文档

## 性能优化

### 生产环境配置
- 启用缓存策略
- 配置CDN
- 压缩静态资源
- 启用gzip压缩

### 监控配置
- 设置错误监控
- 配置性能监控
- 设置API调用限制

## 安全配置

- 定期轮换API密钥
- 设置CORS策略
- 启用HTTPS
- 配置安全头

---

🎉 部署完成后，你的AI简历就能让全世界看到了！
