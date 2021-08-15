import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

const store = createStore({
	state() {
		return {
			loading: false,
			search: "",
			movies: [],
		};
	},
});

createApp(App)
	.use(store)
	.use(router)
	.mount("#app");
