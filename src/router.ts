import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Index,
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/pages/Home.vue"),
        },
        {
          path: "about",
          name: "about",
          component: () => import("./views/pages/About.vue"),
        },
      ]
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
