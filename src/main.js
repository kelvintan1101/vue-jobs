import "primeicons/primeicons.css";
import { createApp } from "vue";
import "./assets/main.css";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(Toast);
app.mount("#app");
