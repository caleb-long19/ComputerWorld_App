import App from './App.vue'
import { createApp } from 'vue'
import router from './router/index.js'
import 'mdb-ui-kit/css/mdb.min.css';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App)

const options = {
  position: POSITION.TOP_RIGHT,  // Position of the toast
  timeout: 5000,  // Duration the toast stays visible
  closeOnClick: true,  // Close toast when clicked
  pauseOnHover: true,  // Pause when hovered
  zIndex: 9999
};

app.use(router)
app.use(Toast, options);

app.mount('#app')
