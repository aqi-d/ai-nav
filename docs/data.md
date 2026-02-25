# 📊 数据分析与文档处理

利用 AI 快速解读复杂数据、可视化图表，并从海量文档中提取核心洞察。

<!-- 网格布局容器：minmax(220px, 1fr) 适配小卡片 -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">

  <ToolCard 
    icon="📊" 
    title="Julius AI" 
    desc="强大的数据分析助手，支持上传 Excel/CSV 文件，自动生成可视化图表与深度解释。"
    :tags="['分析', '可视化', '文件']"
    link="https://julius.ai"
  />

  <ToolCard 
    icon="📈" 
    title="ChatPDF" 
    desc="上传 PDF 即可对话，快速提取文献、报告或论文的核心信息，支持多语言。"
    :tags="['PDF', '阅读', '总结']"
    link="https://www.chatpdf.com"
  />

  <ToolCard 
    icon="🧮" 
    title="NotebookLM" 
    desc="Google 出品，基于笔记的智能研究助手，可上传多个文档并生成音频概览 (Audio Overview)。"
    :tags="['谷歌', '研究', '笔记']"
    link="https://notebooklm.google.com"
  />

</div>

> 💡 **提示**：处理表格数据选 Julius AI，快速读论文/报告选 ChatPDF，深度研究与管理知识库选 NotebookLM。