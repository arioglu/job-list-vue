import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../src/components/HomeScreen";
import JobDetails from "../src/components/JobDetails";
import JobList from "../src/components/JobList";
import NotFound from "../src/components/NotFound";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/joblist",
      name: "job-list",
      component: JobList,
      props: route => ({city: route.query.city, keyword: route.query.keyword})
    },
    {
      path: "/jobdetail/:id",
      name: "job-details",
      component: JobDetails,
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
