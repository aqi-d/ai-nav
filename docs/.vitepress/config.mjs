// docs/.vitepress/config.mjs
import { defineConfig } from 'vitepress'
import path from 'path'
import { fileURLToPath, URL } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  title: "AI 导航站 | Cyberpunk",
  description: "探索前沿 AI 工具与智能体",
   head: [
     ['link', { rel: 'shortcut icon', type: 'image/png', href: '/logo-v2.jpg' }],
  ],
  vite: {
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, './theme'),
        '@': path.resolve(__dirname, '..'),
      },
    },
  },

  themeConfig: {
    logo: '/logo-v2.jpg',
    appearance: 'dark', 
    // 顶部导航：只放最核心的 5 个
    nav: [
      { text: "🏠 首页", link: "/" },
      { text: "💬 大模型", link: "/llm" },
      { text: "🎨 绘图", link: "/image" },
      { text: "💻 编程", link: "/coding" },
      { text: "🎬 视频", link: "/video" },
    ],

    // 侧边栏：包含所有细分领域
    sidebar: [
      {
        text: "🔥 核心基础",
        items: [
          { text: "💬 大语言模型 (LLM)", link: "/llm" },
          { text: "🔍 搜索与问答", link: "/search" },
          { text: "🧠 认知与推理", link: "/reasoning" },
        ],
      },
      {
        text: "🎨 视觉与创意",
        items: [
          { text: "🖼️ AI 绘画/图像", link: "/image" },
          { text: "🎬 视频生成/编辑", link: "/video" },
          { text: "🎵 音频/音乐/语音", link: "/audio" },
          { text: "🎭 3D 与建模", link: "/3d" },
          { text: "📸 设计与 PPT", link: "/design" },
        ],
      },
      {
        text: "💻 开发与数据",
        items: [
          { text: "💻 编程助手", link: "/coding" },
          { text: "📊 数据分析/BI", link: "/data" },
          { text: "🔒 网络安全", link: "/security" },
        ],
      },
      {
        text: "⚡ 效率与办公",
        items: [
          { text: "📝 写作与文案", link: "/writing" },
          { text: "🗣️ 翻译与语言", link: "/translation" },
          { text: "📅 办公自动化", link: "/productivity" },
          { text: "📧 邮件与客服", link: "/customer-service" },
        ],
      },
      {
        text: "🦾 智能体与前沿",
        items: [
          { text: "🤖 AI Agents (智能体)", link: "/agents" },
          { text: "🔄 工作流/低代码", link: "/workflow" },
          { text: "👥 数字人/虚拟偶像", link: "/avatar" },
        ],
      },
      {
        text: "🏢 垂直行业",
        items: [
          { text: "⚖️ 法律与合规", link: "/legal" },
          { text: "🏥 医疗与健康", link: "/health" },
          { text: "🎓 教育与学习", link: "/education" },
          { text: "📈 营销与 SEO", link: "/marketing" },
          { text: "🛒 电商与零售", link: "/ecommerce" },
        ],
      },
    ],

    colorMode: "dark",
    footer: {
      message: "Powered by VitePress & Vue",
      copyright: "Copyright © 2026 aqi",
    },
  },
})