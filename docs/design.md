# 📸 设计与 PPT 制作

从一键生成演示文稿到智能修图抠图，AI 让设计工作变得前所未有的简单高效。

<!-- 网格布局容器：minmax(220px, 1fr) 适配小卡片 -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">

  <ToolCard 
    icon="📽️" 
    title="Gamma" 
    desc="最强 AI PPT 生成工具，输入主题即可一键生成精美幻灯片和文档。"
    :tags="['PPT', '演示', '高效']"
    link="https://gamma.app"
  />

  <ToolCard 
    icon="🎨" 
    title="Canva AI" 
    desc="全球领先的设计平台，集成魔法编辑、文生图等强大 AI 功能。"
    :tags="['设计', '全能', '模板']"
    link="https://www.canva.com"
  />

  <ToolCard 
    icon="🖼️" 
    title="Remove.bg" 
    desc="一键自动去除图片背景，无需手动抠图，简单快捷且免费。"
    :tags="['抠图', '工具', '免费']"
    link="https://www.remove.bg"
  />

</div>

> 💡 **提示**：做演示文稿首选 Gamma，日常平面设计用 Canva，快速抠图用 Remove.bg。后续可补充 Adobe Firefly 和 Looka (Logo 设计)。