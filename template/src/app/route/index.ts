import Vue from "vue";
import Router from "vue-router";
import BaseModule from "@module/Base";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: BaseModule,
  }
];

const router = new Router({
  routes
});

export default router;
