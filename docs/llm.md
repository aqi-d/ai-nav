# 💬 大语言模型 (LLM)

这里汇集了全球最强大的对话式 AI，涵盖从通用聊天到专业推理的各种模型。

<!-- 网格布局容器：minmax(220px, 1fr) 适配小卡片 -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">

  <ToolCard 
    icon="🧠" 
    title="ChatGPT" 
    desc="OpenAI 出品，全球最强综合大模型，逻辑与创造力兼备。"
    :tags="['全能', '付费', '标杆']"
    link="https://chat.openai.com"
  />

  <ToolCard 
    icon="🤖" 
    title="Claude 3.5 Sonnet" 
    desc="Anthropic 出品，目前编码与写作能力最强的模型，上下文理解极佳。"
    :tags="['编码', '写作', '强推理']"
    link="https://claude.ai"
  />

  <ToolCard 
    icon="💎" 
    title="Gemini 1.5 Pro" 
    desc="Google 旗舰模型，拥有超长上下文窗口，多模态能力强。"
    :tags="['谷歌', '长文本', '多模态']"
    link="https://gemini.google.com"
  />

  <ToolCard 
    icon="🌙" 
    title="Kimi 智能助手" 
    desc="月之暗面出品，国产最强长文本处理模型，读论文/财报神器。"
    :tags="['国产', '长文本', '免费']"
    link="https://kimi.moonshot.cn"
  />

  <ToolCard 
    icon="🎵" 
    title="豆包 (Doubao)" 
    desc="字节跳动出品，语音交互体验极佳，日常陪伴与多功能助手。"
    :tags="['国产', '语音', '字节']"
    link="https://www.doubao.com"
  />

  <ToolCard 
    icon="🦆" 
    title="腾讯元宝" 
    desc="腾讯出品，深度整合微信公众号生态，搜文章/总结研报利器。"
    :tags="['国产', '微信', '搜索']"
    link="https://yuanbao.tencent.com"
  />

  <ToolCard 
    icon="🦊" 
    title="Perplexity" 
    desc="AI 搜索引擎，实时联网检索，提供准确来源引用。"
    :tags="['搜索', '科研', '实时']"
    link="https://www.perplexity.ai"
  />

  <ToolCard 
    icon="🇨🇳" 
    title="通义千问" 
    desc="阿里出品，中文理解能力强，支持长文档解析与代码生成。"
    :tags="['国产', '阿里', '免费']"
    link="https://tongyi.aliyun.com"
  />

</div>

> 💡 **提示**：日常闲聊/语音用 **豆包**，查微信文章/研报用 **元宝**，写代码/深度创作首选 **Claude**，长文档阅读选 **Kimi**。