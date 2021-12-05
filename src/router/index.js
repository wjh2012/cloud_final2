import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import exercise1 from "@/views/exercise1.vue";
import exercise2 from "@/views/exercise2.vue";
import exercise3 from "@/views/exercise3.vue";
import wjh from "@/views/wjh.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/exercise1",
    name: "exercise1",
    component: exercise1,
  },
  {
    path: "/exercise2",
    name: "exercise2",
    component: exercise2,
  },
  {
    path: "/exercise3",
    name: "exercise3",
    component: exercise3,
  },    
  {
    path: "/wjh",
    name: "wjh",
    component: wjh,
  }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;