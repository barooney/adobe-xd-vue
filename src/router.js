import VueRouter from 'vue-router'
import StartPage from "./pages/start/StartPage.vue";

const routes = [
	{
		name: 'Start',
		path: '/',
		component: StartPage,
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router