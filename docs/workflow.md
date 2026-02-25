# 🔄 工作流与自动化集成

将不同的 AI 工具和应用连接起来，构建自动化的业务流程，让数据在系统间自由流动。

<!-- 网格布局容器：minmax(220px, 1fr) 适配小卡片 -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">

  <ToolCard 
    icon="⚡" 
    title="Zapier" 
    desc="自动化工作流鼻祖，支持连接全球 5000+ 个应用，模板丰富，上手即用。"
    :tags="['自动化', '连接', '经典']"
    link="https://zapier.com"
  />

  <ToolCard 
    icon="🔗" 
    title="Make (Integromat)" 
    desc="可视化程度极高的自动化工具，支持复杂逻辑分支与数据转换，灵活强大。"
    :tags="['可视化', '逻辑', '自动化']"
    link="https://www.make.com"
  />

  <ToolCard 
    icon="🇨🇳" 
    title="集简云" 
    desc="国内领先的无代码集成平台，专门连接飞书、钉钉、企业微信等国内主流应用。"
    :tags="['国产', '集成', '无代码']"
    link="https://www.jijianyun.com"
  />

</div>

> 💡 **提示**：连接国际应用首选 Zapier 或 Make，主要使用国内软件（如飞书/钉钉）自动化选集简云。