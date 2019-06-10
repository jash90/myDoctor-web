import Vue from "vue";
import Router from "vue-router";
import Start from "./views/Start.vue";
import Login from "./views/Login.vue";
import Visit from "./views/Visit.vue";
import Home from "./views/Home.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "start",
      component: Start
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },  
    {
      path: "/visit",
      name: "visit",
      component: Visit
    },
    {
      path:"/home",
      name:"home",
      component:Home
    }
  ]
});
