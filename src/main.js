import { createApp } from 'vue'
import { createPinia } from 'pinia'

import veevalidationPlugin from './include/validation'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(veevalidationPlugin)

app.mount('#app')
