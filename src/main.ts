import { createApp } from 'vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/init.css'

import i18n from './locale'

createApp(App).use(store).use(router).use(Antd).use(i18n).mount('#app')
