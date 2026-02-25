# 🎨 AI 绘画与图像生成

从艺术创作到商业设计，这里汇集了目前画质最强、最易用的 AI 绘图工具。

<!-- 网格布局容器：minmax(220px, 1fr) 适配小卡片 -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">

  <ToolCard 
    icon="🎨" 
    title="Midjourney" 
    desc="目前艺术感与画质最强的 AI 绘图工具，需在 Discord 使用。"
    :tags="['画质之王', '付费', 'Discord']"
    link="https://www.midjourney.com"
  />

  <ToolCard 
    icon="🖌️" 
    title="Stable Diffusion" 
    desc="开源生态最丰富的绘图模型，支持本地部署与控制网。"
    :tags="['开源', '可控', '本地']"
    link="https://stability.ai"
  />

  <ToolCard 
    icon="🎭" 
    title="DALL-E 3" 
    desc="集成在 ChatGPT 中，提示词理解最准确，上手最简单。"
    :tags="['易用', '理解强', '内置']"
    link="https://openai.com/dall-e-3"
  />

  <ToolCard 
    icon="🚀" 
    title="Flux.1" 
    desc="黑森林实验室新品，开源界新王，写实度极高。"
    :tags="['新开源', '写实', '高质量']"
    link="https://blackforestlabs.ai"
  />

  <ToolCard 
    icon="👗" 
    title="LiblibAI (哩布)" 
    desc="国内最大的 SD 模型分享社区，在线生成免费且快速。"
    :tags="['国产', '社区', '免费']"
    link="https://www.liblib.art"
  />

</div>

> 💡 **提示**：追求极致画质选 Midjourney，需要精准控制选 Stable Diffusion 或 Flux。