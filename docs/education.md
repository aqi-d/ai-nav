# 🎓 教育与智能学习

从语言习得到学科辅导，AI 导师提供个性化的学习路径，让教育更加高效有趣。

<!-- 网格布局容器：minmax(220px, 1fr) 适配小卡片 -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">

  <ToolCard 
    icon="🎓" 
    title="Duolingo Max" 
    desc="多邻国高阶版，利用 AI 进行情景角色扮演练习，并提供详细的错误解释与语法指导。"
    :tags="['语言', '学习', '互动']"
    link="https://www.duolingo.com"
  />

  <ToolCard 
    icon="📚" 
    title="Khanmigo" 
    desc="可汗学院推出的 AI 导师，采用苏格拉底式教学法，引导学生独立思考而非直接给答案。"
    :tags="['辅导', '引导', '教育']"
    link="https://khanacademy.org/khan-labs"
  />

</div>

> 💡 **提示**：学习外语首选 Duolingo Max，K-12 学科辅导（数学/科学/写作）首选 Khanmigo。未来可补充 Coursera Coach 或 Quizlet Q-Chat。