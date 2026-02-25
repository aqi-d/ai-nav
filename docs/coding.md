# 💻 编程助手与代码生成

从智能代码补全到全自动软件开发，AI 正在彻底改变程序员的 workflow。

<!-- 网格布局容器：minmax(220px, 1fr) 适配小卡片 -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">

  <ToolCard 
    icon="💻" 
    title="Cursor" 
    desc="目前最火的 AI 代码编辑器，基于 VS Code 深度定制，智能补全与对话重构极强。"
    :tags="['编辑器', '开发', '必用']"
    link="https://www.cursor.com"
  />

  <ToolCard 
    icon="🐙" 
    title="GitHub Copilot" 
    desc="微软与 GitHub 联合推出，老牌代码补全助手，集成于主流 IDE。"
    :tags="['补全', '微软', '经典']"
    link="https://github.com/features/copilot"
  />

  <ToolCard 
    icon="🔍" 
    title="Devin" 
    desc="自称“全球首个 AI 软件工程师”，可独立规划并执行复杂开发任务。"
    :tags="['Agent', '独立', '前沿']"
    link="https://devin.ai"
  />

  <ToolCard 
    icon="🌐" 
    title="v0.dev" 
    desc="Vercel 出品，通过对话即可生成高质量的 React/Tailwind 前端代码与 UI。"
    :tags="['前端', 'UI', '生成']"
    link="https://v0.dev"
  />

  <ToolCard 
    icon="🐛" 
    title="Blackbox AI" 
    desc="专注于代码搜索、生成与调试的 AI 助手，支持多语言。"
    :tags="['搜索', '代码', '辅助']"
    link="https://www.blackbox.ai"
  />

</div>

> 💡 **提示**：日常开发首选 Cursor 或 Copilot，快速搭建前端 UI 用 v0.dev，探索自主开发用 Devin。