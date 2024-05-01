import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  { path: "/", name: "home", component: () => import("../views/HomeView.vue") },
  {
    path: "/navbar",
    name: "navbar",
    component: () => import("../components/navBar.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/loginPage.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/registerPage.vue"),
  },
  {
    path: "/addProduct",
    name: "addProduct",
    component: () => import("../components/addProducts.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../components/productsPage.vue"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/editProduct.vue"),
  },
  {
    path: "/books",
    name: "books",
    component: () => import("../components/booksPage.vue"),
    beforeEnter: () => {
      // ...
      if (!localStorage.getItem("token")) {
        return { name: "login" };
      }
    },
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/testForm",
    name: "testForm",
    component: () => import("../components/testForm.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
