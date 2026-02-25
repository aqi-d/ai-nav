// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './style.css' // 引入自定义样式
import ToolCard from '../../components/ToolCard.vue' // 引入组件

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ToolCard', ToolCard) // 全局注册
  }
  // 这里可以增强默认主题，例如注册全局组件
  // enhanceApp({ app }) {
  //   // app.component('MyComponent', MyComponent)
  // }
}