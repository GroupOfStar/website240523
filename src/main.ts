import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
import { message } from 'ant-design-vue'
import 'moment/dist/locale/zh-cn'

message.config({
  maxCount: 1,
})

createApp(App).use(router).mount('#app')
