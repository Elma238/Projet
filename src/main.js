import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routers from './routers'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options = {
  transition: 'Vue-Toastification__fade',
  maxToasts: 5,
  newestOnTop: true,
  toastClassName: 'custom-toast',
}

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(routers)
app.use(createPinia())

app.use(Toast, options) // ⬅️ Active les toasts

app.mount('#app')
//createApp(App).use(routers).mount('#app')
