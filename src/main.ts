import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import FormDraggable from '@/components/form-draggable/index'

// 引入公共样式
import 'element-plus/lib/theme-chalk/index.css';

createApp(App)
  .use(ElementPlus, { locale, size: 'small' })
  .use(FormDraggable)
  .mount('#app')
