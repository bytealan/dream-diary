import Taro from '@tarojs/taro'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import themeStore from './store/themeStore';
import { storeToRefs } from "pinia";

import './app.css'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())

const { theme } = storeToRefs(themeStore());
Taro.onThemeChange(e => {
  theme.value = e.theme
})


export default App
