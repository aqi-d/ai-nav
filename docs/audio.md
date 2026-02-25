# 🎵 音频、音乐与语音

从一键生成完整歌曲到逼真的语音克隆，这里汇集了最强大的 AI 音频工具。

<!-- 网格布局容器：minmax(220px, 1fr) 适配小卡片 -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">

  <ToolCard 
    icon="🎵" 
    title="Suno AI" 
    desc="目前最强的 AI 音乐生成器，一键生成完整歌曲（含人声）。"
    :tags="['音乐', '人声', '爆款']"
    link="https://suno.com"
  />

  <ToolCard 
    icon="🎹" 
    title="Udio" 
    desc="Suno 的强劲对手，音乐复杂度和音质极高，适合专业创作。"
    :tags="['音乐', '高质', '复杂']"
    link="https://www.udio.com"
  />

  <ToolCard 
    icon="🎙️" 
    title="ElevenLabs" 
    desc="全球最强 TTS (文本转语音)，情感逼真，支持声音克隆。"
    :tags="['配音', '克隆', '逼真']"
    link="https://elevenlabs.io"
  />

  <ToolCard 
    icon="📝" 
    title="Whisper" 
    desc="OpenAI 开源语音识别模型，转录准确率极高，支持多语言。"
    :tags="['转写', '开源', '识别']"
    link="https://openai.com/index/whisper/"
  />

  <ToolCard 
    icon="🇨🇳" 
    title="Fish Audio (鱼音)" 
    desc="国产高质量语音合成与克隆工具，效果出色，支持中文优化。"
    :tags="['国产', '配音', '克隆']"
    link="https://fish.audio"
  />

</div>

> 💡 **提示**：写歌首选 Suno 或 Udio，做视频配音首选 ElevenLabs 或 Fish Audio，语音转文字用 Whisper。