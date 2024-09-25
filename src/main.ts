import App from './App.vue'
import { createApp } from 'vue'
import router from './router/index.js'
import Toast, { POSITION } from 'vue-toastification'
import 'mdb-ui-kit/css/mdb.min.css';

const app = createApp(App)

app.use(router)
app.use(Toast, {
  position: POSITION.TOP_CENTER,
  timeout: 2000
})

app.mount('#app')
