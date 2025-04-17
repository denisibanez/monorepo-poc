import { createApp } from "vue";
import App from "./App.vue";
import { useD } from "@shared/d";

useD("A");

import "./style.css";

createApp(App).mount("#app");
