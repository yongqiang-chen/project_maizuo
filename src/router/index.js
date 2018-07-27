import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//组件
import Home from "../components/pages/home/Home.vue";
import Cinema from "../components/pages/cinema/Cinema.vue";
import Films from "../components/pages/films/Films.vue";
import Mine from "../components/pages/mine/Mine.vue";
import NotFound from "../components/common/NotFound.vue";

const router = new VueRouter({
    routes: [{
            path: "",
            redirect: "/home"
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/cinema",
            component: Cinema
        },
        {
            path: "/films",
            component: Films
        },
        {
            path: "/mine",
            component: Mine
        },
        {
            path: "/404",
            component: NotFound
        },
        {
            path: "**",
            redirect: "/404"
        }
    ]
});

export default router;