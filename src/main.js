import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Vue 앱 생성
const app = createApp(App);

// AOS 초기화
app.mount('#app');

AOS.init();
