import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'
import { store} from "./store/index";
import '@/assets/styles/common.less';


	



createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
