import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Импорт Vuetify
import '@mdi/font/css/materialdesignicons.css'; // Импорт иконок
import router from './router'; // Импорт маршрутов
import VueBarcode from '@chenfengyuan/vue-barcode';

const app = createApp(App);

app.component(VueBarcode.name, VueBarcode);
app.use(vuetify);
app.use(router);
app.mount('#app');



