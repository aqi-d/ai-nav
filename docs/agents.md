# 🤖 AI Agents 与智能体

从简单的对话机器人到能自主规划任务的智能体，这里是构建和探索 AI Agent 的前沿阵地。

<!-- 网格布局容器：minmax(220px, 1fr) 适配小卡片 -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">

  <ToolCard 
    icon="🤖" 
    title="Coze (扣子)" 
    desc="字节出品，零代码构建 AI Bot 平台，支持发布到抖音、微信、Discord 等多平台。"
    :tags="['低代码', 'Bot', '国产']"
    link="https://www.coze.com"
  />

  <ToolCard 
    icon="🕸️" 
    title="Dify" 
    desc="开源的 LLM 应用开发平台，提供可视化编排，非常适合企业私有化部署。"
    :tags="['开源', '开发', '部署']"
    link="https://dify.ai"
  />

  <ToolCard 
    icon="🦾" 
    title="AutoGPT" 
    desc="最早的自主 AI Agent 项目之一，能自动拆解目标、执行任务并反思结果。"
    :tags="['开源', '自主', '实验']"
    link="https://autogpt.net"
  />

  <ToolCard 
    icon="🔍" 
    title="Genspark" 
    desc="新一代 AI 搜索引擎，能自动搜集信息并生成结构化的专题页面 (Sparkpage)。"
    :tags="['搜索', '生成', '专题']"
    link="https://www.genspark.ai"
  />

</div>

> 💡 **提示**：想快速做个机器人玩或商用选 Coze，企业自建 AI 应用选 Dify，研究自主智能体选 AutoGPT。