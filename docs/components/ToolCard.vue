<!-- docs/components/ToolCard.vue -->
<template>
  <div class="cyber-card">
    <!-- 头部：图标 + 标题 -->
    <div class="card-header">
      <span class="icon">{{ icon }}</span>
      <h3 class="title">{{ title }}</h3>
    </div>
    
    <!-- 描述：限制行数，避免太高 -->
    <p class="desc">{{ desc }}</p>
    
    <!-- 标签：紧凑排列 -->
    <div class="tags">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    
    <!-- 按钮：小型化 -->
    <a :href="link" target="_blank" class="action-btn">
      体验 <span class="arrow">➜</span>
    </a>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '🤖' },
  title: { type: String, required: true },
  desc: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
  link: { type: String, default: '#' }
})
</script>

<style scoped>
.cyber-card {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 0, 255, 0.3);
  border-radius: 12px; /* 稍微减小圆角 */
  padding: 14px; /* 减小内边距 */
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 8px; /* 减小间距 */
  height: 100%; /* 确保高度一致 */
  box-sizing: border-box;
}

.cyber-card:hover {
  border-color: rgba(0, 255, 255, 0.6);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.2); /* 减小阴影范围 */
  transform: translateY(-4px); /* 减小悬浮位移 */
  background: rgba(15, 23, 42, 0.8);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.icon { 
  font-size: 1.2rem; /* 减小图标 */
  line-height: 1;
}

.title {
  font-size: 1rem; /* 减小标题字体 */
  font-weight: 700;
  color: #fff;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

.desc {
  font-size: 0.8rem; /* 减小描述字体 */
  color: #94a3b8;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 限制最多显示 2 行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.24em; /* 预留固定高度，防止卡片高低不一 */
}

.tags { 
  display: flex; 
  gap: 4px; /* 减小标签间距 */
  flex-wrap: wrap; 
  margin-top: auto; /* 将标签推到底部附近 */
}

.tag {
  font-size: 0.65rem; /* 减小标签字体 */
  padding: 2px 6px; /* 减小标签内边距 */
  background: rgba(255, 0, 255, 0.1);
  color: #ff00ff;
  border: 1px solid rgba(255, 0, 255, 0.3);
  border-radius: 4px;
  font-weight: 600;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 12px; /* 减小按钮内边距 */
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.8rem; /* 减小按钮字体 */
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 4px;
}

.action-btn:hover { 
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  border-color: transparent;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
}

.arrow {
  transition: transform 0.3s;
  font-size: 0.9rem;
}

.action-btn:hover .arrow {
  transform: translateX(3px);
}
</style>