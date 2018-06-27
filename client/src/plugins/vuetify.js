import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  theme: {
    info: "#CDEDF6", // sky blue
    error: "#D84727", // dark red
    accent: "#042A2B", // dark green
    warning: "#f44336", // light red
    success: "#4CAF50", // green
    primary: "#EF7B45", // orange
    secondary: "#5EB1BF" // light blue
  }
});
