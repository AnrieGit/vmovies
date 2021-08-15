import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MovieDetail from "../views/MovieDetail.vue";
import SearchResult from "../views/SearchResult.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/search/:search",
		name: "SearchResult",
		component: SearchResult,
	},
	{
		path: "/movie/:id",
		name: "MovieDetail",
		component: MovieDetail,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
