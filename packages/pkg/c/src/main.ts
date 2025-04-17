import { createApp } from "vue";
import App from "./App.vue";
import { useD } from "@shared/d";

useD("C");

createApp(App).mount("#app");
