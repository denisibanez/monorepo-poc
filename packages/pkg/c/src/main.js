import { createApp } from "vue";
import App from "./App.vue";
import { useD } from "@shared/d";

useD("C");

import "./style.css";

createApp(App).mount("#app");
