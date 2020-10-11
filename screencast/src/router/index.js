import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import VideoWatch from "../views/VideoWatch.vue";

Vue.use(VueRouter);

const routes = [
    {
    path: "/",
    name: "home",
    component: Home
    },
    {
        path: "/about",
        name: "about",

        component: () =>
        import {"../views/About.vue"}
    },
];

