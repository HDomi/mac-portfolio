import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainLayout from "@/components/layout/MainLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: HomeView,
      },
    ],
  },
];

export default routes;
