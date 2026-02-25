# 🏥 医疗与健康 (Healthcare AI)

利用 AI 辅助疾病诊断、药物研发及健康咨询，提升医疗服务效率与准确性。
*注：AI 医疗建议仅供参考，不能替代专业医生诊断。*

<!-- 网格布局容器：minmax(220px, 1fr) 适配小卡片 -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">

  <ToolCard 
    icon="🏥" 
    title="Med-PaLM 2" 
    desc="Google DeepMind 研发的医疗专用大模型，在医学问答考试中达到专家水平，擅长复杂推理。"
    :tags="['医疗', '谷歌', '专业']"
    link="https://deepmind.google/discover/blog/improving-factuality-and-reasoning-in-healthcare/"
  />

  <!-- 预留位置：未来可添加 Ada Health, Buoy Health, Insilico Medicine (药物研发) 等工具 -->

</div>

> 💡 **提示**：Med-PaLM 目前主要集成在 Google Cloud 医疗解决方案中供机构使用。个人用户可关注 Ada Health (症状检查) 或 K Health 等应用。未来可补充 AI 药物研发工具如 Insilico Medicine。