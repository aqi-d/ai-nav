# 🎬 视频生成与编辑

AI 视频生成是目前最火热的赛道，从文本生成视频到数字人播报应有尽有。

<!-- 网格布局容器：minmax(220px, 1fr) 适配小卡片 -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">

  <ToolCard 
    icon="🎥" 
    title="Runway Gen-3" 
    desc="专业级视频生成工具，电影质感，控制力强。"
    :tags="['专业', '电影感', '付费']"
    link="https://runwayml.com"
  />

  <ToolCard 
    icon="✨" 
    title="Luma Dream Machine" 
    desc="目前公开免费额度较多，动态幅度大，物理规律模拟好。"
    :tags="['免费', '高动态', '热门']"
    link="https://lumalabs.ai/dream-machine"
  />

  <ToolCard 
    icon="🗣️" 
    title="HeyGen" 
    desc="数字人视频生成首选，口型同步完美，支持翻译视频。"
    :tags="['数字人', '营销', '口型']"
    link="https://www.heygen.com"
  />

  <ToolCard 
    icon="🇨🇳" 
    title="可灵 AI (Kling)" 
    desc="快手出品，生成时长可达 2 分钟，动作自然度极高。"
    :tags="['国产', '长视频', '高质']"
    link="https://kling.kuaishou.com"
  />

  <ToolCard 
    icon="🎞️" 
    title="Pika Art" 
    desc="擅长动画风格，支持局部修改和唇形同步。"
    :tags="['动画', '修改', '趣味']"
    link="https://pika.art"
  />

</div>

> 💡 **提示**：追求电影质感选 Runway，制作数字人口播选 HeyGen，免费试玩选 Luma。