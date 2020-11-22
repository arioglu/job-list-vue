const routes = [
  {
    path: "/",
    component: () => import("../components/HomeScreen"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../components/HomeScreen"),
  },
  {
    path: "/joblist",
    name: "joblist",
    component: () => import("../components/JobList"),
  },
  {
    path: "/jobdetail/:id",
    name: "jobdetails",
    component: () => import("../components/JobDetails"),
  },
  {
    path: "*",
    component: () => import("../components/NotFound"),
  },
];

export default routes;
