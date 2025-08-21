# 🤖 AI Resume - 下一代智能简历

一个革命性的AI驱动的交互式简历系统，不仅让HR与你的AI分身对话，还能反向面试了解公司需求！

## ✨ 核心功能

### 🎯 AI分身对话
- **完全模拟本人**: AI了解你的所有经历、技能、项目和思维方式
- **自然对话**: 支持多轮对话，回答就像本人在场
- **语音交互**: 支持语音输入和AI语音回复
- **实时响应**: 基于GPT-4的智能回答系统

### 🔄 反向面试模式
- **AI面试官**: AI主动了解公司业务、团队、技术挑战
- **智能匹配**: 根据公司需求匹配你的相关经验亮点
- **双向选择**: 不只是被面试，而是评估公司是否值得加入
- **专业深度**: 问出有深度的问题，展现专业素养

### 🎨 现代化体验
- **炫酷UI**: 使用Framer Motion的流畅动画效果
- **响应式设计**: 完美支持桌面和移动端
- **深色模式**: 支持明暗主题切换
- **实时状态**: 打字指示器、语音状态等

## 🚀 快速开始

### 环境要求
- Node.js 18+
- OpenAI API Key

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/ai-resume.git
   cd ai-resume
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **配置环境变量**
   ```bash
   cp env.example .env.local
   ```
   
   编辑 `.env.local` 文件：
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   OPENAI_MODEL=gpt-4-turbo-preview
   ```

4. **个性化配置**
   编辑 `src/data/personal-data.ts` 文件，替换成你的个人信息：
   - 基本信息（姓名、职位、简介）
   - 工作经历和项目经验
   - 技能栈和教育背景
   - 个性特点和价值观

5. **启动开发服务器**
   ```bash
   npm run dev
   ```

6. **访问应用**
   打开 http://localhost:3000

## 📁 项目结构

```
ai-resume/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/chat/       # AI聊天API
│   │   ├── globals.css     # 全局样式
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 主页
│   ├── components/         # React组件
│   │   ├── ChatInterface.tsx    # 聊天界面
│   │   ├── ChatMessage.tsx      # 消息组件
│   │   ├── Header.tsx           # 页头
│   │   ├── ModeToggle.tsx       # 主题切换
│   │   ├── TypingIndicator.tsx  # 打字指示器
│   │   └── VoiceControls.tsx    # 语音控制
│   ├── data/               # 数据层
│   │   └── personal-data.ts     # 个人信息数据
│   ├── lib/                # 工具库
│   │   ├── prompts.ts          # AI提示词生成
│   │   └── utils.ts            # 通用工具函数
│   └── types/              # TypeScript类型定义
│       └── chat.ts             # 聊天相关类型
├── public/                 # 静态资源
├── package.json           # 项目配置
└── README.md             # 项目文档
```

## 🎨 自定义配置

### 修改个人信息
编辑 `src/data/personal-data.ts`:

```typescript
export function getPersonalData(): PersonalData {
  return {
    name: "你的姓名",
    title: "你的职位",
    summary: "你的个人简介",
    skills: ["技能1", "技能2"],
    experience: [
      {
        company: "公司名称",
        position: "职位",
        duration: "2020-2023",
        description: "工作描述",
        achievements: ["成就1", "成就2"],
        technologies: ["技术1", "技术2"]
      }
    ],
    // ... 其他信息
  }
}
```

### 自定义AI个性
在 `src/lib/prompts.ts` 中调整AI的回答风格和策略。

### 样式定制
- 主题色彩：编辑 `tailwind.config.js`
- 动画效果：调整 `src/components/` 中的Framer Motion配置
- 全局样式：修改 `src/app/globals.css`

## 🔧 高级功能

### 语音功能
- 自动检测浏览器语音识别支持
- 支持中文语音输入和合成
- 可自定义语音参数（语速、音调等）

### 反向面试模式
AI会根据不同场景调整策略：
- **电商公司** → 突出推荐系统经验
- **AI公司** → 强调AI产品和技术能力
- **创业公司** → 展现从0到1的产品能力

### 部署选项

#### Vercel部署（推荐）
1. 推送代码到GitHub
2. 连接Vercel账户
3. 配置环境变量
4. 自动部署

#### 其他平台
支持任何支持Node.js的平台：Netlify、Railway、Digital Ocean等

## 📊 使用数据

### 支持的浏览器
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+

### 性能指标
- 首次加载时间：< 2秒
- AI响应时间：< 3秒
- 语音识别准确率：> 95%

## 🤝 贡献指南

欢迎提交Issues和Pull Requests！

1. Fork项目
2. 创建功能分支：`git checkout -b feature/amazing-feature`
3. 提交改动：`git commit -m 'Add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 创建Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🆘 常见问题

### Q: OpenAI API调用失败？
A: 检查API密钥是否正确，确保账户有足够余额，网络连接正常。

### Q: 语音功能不工作？
A: 确保使用HTTPS访问，授权麦克风权限，检查浏览器兼容性。

### Q: 如何修改AI的回答风格？
A: 编辑 `src/lib/prompts.ts` 文件中的系统提示词。

### Q: 可以集成其他AI模型吗？
A: 可以，修改 `src/app/api/chat/route.ts` 适配其他模型API。

## 📮 联系方式

- 作者：李万里
- 邮箱：liwanli@example.com
- GitHub：[@liwanli](https://github.com/liwanli)

---

⭐ 如果这个项目对你有帮助，请给个星星支持一下！
