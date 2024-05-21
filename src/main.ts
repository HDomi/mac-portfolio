import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// quasar
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import "quasar/dist/quasar.sass";
//최하위에서 import 해야함
import "./assets/styles/index.scss";

const app = createApp(App);
const pinia = createPinia();

app
  .use(Quasar, quasarUserOptions)
  .use(Vue3Toasity)
  .use(pinia)
  .use(router)
  .mount("#app");
