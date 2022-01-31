import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Cadastro from "../views/Cadastro.vue";
import SPA from "../views/SPA.vue";
import Sobre from "../views/board/Sobre.vue";

import Dashboard from "../views/Dashboard.vue";
import Usuario from "../views/board/Usuario.vue";
import Estoque from "../views/board/Estoque.vue";
import Produto from "../views/board/Produto.vue";
import Dispositivo from "../views/board/Dispositivo.vue";

import CadastroUsuario from "../views/board/telasCadastro/CadastroUsuario.vue";
import EditarUsuario from "../views/board/telasCadastro/EditarUsuario.vue";
import CadastroProduto from "../views/board/telasCadastro/CadastroProduto.vue";
import EditarProduto from "../views/board/telasCadastro/EditarProduto.vue";
import CadastroEstoque from "../views/board/telasCadastro/CadastroEstoque.vue";
import EditarEstoque from "../views/board/telasCadastro/EditarEstoque.vue";
import CadastroDispositivo from "../views/board/telasCadastro/CadastroDispositivo.vue";
import EditarDispositivo from "../views/board/telasCadastro/EditarDispositivo.vue";

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
      {
        path: "/usuario/cadastrar",
        component: CadastroUsuario
      },
      {
        path: "/usuario/editar/:id",
        component: EditarUsuario,
      },
      {
        path: "/produto/cadastrar",
        component: CadastroProduto
      },
      {
        path: "/produto/editar/:id",
        component: EditarProduto,
      },
      {
        path: "/estoque/cadastrar",
        component: CadastroEstoque
      },
      {
        path: "/estoque/editar/:id",
        component: EditarEstoque,
      },
      {
        path: "/dispositivo/cadastrar",
        component: CadastroDispositivo
      },
      {
        path: "/dispositivo/editar/:id",
        component: EditarDispositivo,
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
 