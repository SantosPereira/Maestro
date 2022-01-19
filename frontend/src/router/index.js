import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Cadastro from "../views/Cadastro.vue";
import SPA from "../views/SPA.vue";
import Sobre from "../views/Sobre.vue";

import Dashboard from "../views/Dashboard.vue";
import Usuario from "../views/Usuario.vue";
import Estoque from "../views/Estoque.vue";
import Produto from "../views/Produto.vue";
import Dispositivo from "../views/Dispositivo.vue";


const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Cadastro,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/app",
    name: "App",
    component: SPA,
    children: [
      {
        path: "/dashboard",
        component: Dashboard
      },
      {
        path: "/usuario",
        component: Usuario
      },
      {
        path: "/estoque",
        component: Estoque
      },
      {
        path: "/produto",
        component: Produto
      },
      {
        path: "/dispositivo",
        component: Dispositivo
      },
      {
        path: "/sobre",
        component: Sobre
      },
    ]
  }
  // {
  //   path: "/sobre",
  //   name: "Sobre",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Sobre.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
 