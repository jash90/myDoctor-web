import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Start from "./views/Start.vue";
import Login from "./views/Login.vue";
import Visit from "./views/Visit.vue";
import Doctor from "./views/Doctor.vue";
import Pantient from "./views/Pantient.vue";

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
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/visit",
      name: "visit",
      component: Visit
    },
    {
      path: "/doctor",
      name: "doctor",
      component: Doctor
    },
    {
      path: "/pantient",
      name: "pantient",
      component: Pantient
    }
  ]
});