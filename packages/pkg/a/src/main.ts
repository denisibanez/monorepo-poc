import { createApp } from "vue";
import App from "./App.vue";
import { useD } from "@shared/d";

useD("A");

createApp(App).mount("#app");
