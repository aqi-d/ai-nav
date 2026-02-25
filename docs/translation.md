# 🗣️ 翻译与语言学习

打破语言障碍，从精准的文本翻译到保留原声的视频本地化，AI 让全球沟通无障碍。

<!-- 网格布局容器：minmax(220px, 1fr) 适配小卡片 -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">

  <ToolCard 
    icon="🌐" 
    title="DeepL" 
    desc="全球公认最准确的 AI 翻译工具，语境理解极佳，支持文档整篇翻译。"
    :tags="['翻译', '准确', '必备']"
    link="https://www.deepl.com"
  />

  <ToolCard 
    icon="📹" 
    title="Rask AI" 
    desc="革命性的视频翻译与配音工具，能保留原说话人的音色并自动调整口型。"
    :tags="['视频', '翻译', '配音']"
    link="https://www.rask.ai"
  />

</div>

> 💡 **提示**：日常文本/文档翻译首选 DeepL，视频内容本地化（如课程、营销视频）首选 Rask AI。未来可补充 Google Translate API 或 Duolingo Max。