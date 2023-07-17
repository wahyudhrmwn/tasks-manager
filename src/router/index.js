import { createRouter, createWebHistory } from "vue-router";
import TasksView from "@/views/TasksView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: {
        path: "/tasks",
      },
    },
    {
      path: "/tasks",
      name: "tasks",
      component: TasksView,
      children: [
        {
          path: ":id",
          name: "task",
          component: TasksView,
        },
      ],
    },
    {
      path: "/projects",
      name: "projects",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/ProjectsView.vue"),
    },
  ],
});

export default router;
