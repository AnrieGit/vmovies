import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import "nprogress/nprogress.css";

const store = createStore({
	state() {
		return {
			loading: false,
		};
	},
});

createApp(App)
	.use(store)
	.use(router)
	.mount("#app");
