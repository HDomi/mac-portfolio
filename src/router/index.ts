import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});
router.beforeEach((to, from, next) => {
  console.debug(to);
  next();
});

export default router;