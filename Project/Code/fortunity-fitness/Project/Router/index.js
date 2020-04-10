import Vue from 'vue';
import VueRouter from 'vue-router';
import Ping from '../Components/Ping.vue';
Vue.use(VueRouter);
const routes = [
    {
        path: '/ping',
        name: 'Ping',
        component: Ping,
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router;
//# sourceMappingURL=index.js.map