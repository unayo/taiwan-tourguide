import { createApp } from 'vue'
import App from './App.vue'
import '@fontsource/roboto'
import '@fontsource/noto-serif-jp'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
