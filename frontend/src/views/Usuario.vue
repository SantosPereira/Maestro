<template>
  <div>
    <h1>Usuários</h1>
    <section>
      <h3>Lista de Usuários</h3>
      <form action="/listar" method="get">
        <input type="text" placeholder="Nome" />
        <input type="submit" value="Pesquisar" />
      </form>
      <button>Cadastrar Usuário</button>
      <table>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Usuário</th>
          <th>Filial</th>
          <th>Setor</th>
          <th>Função</th>
          <th>Ações</th>
        </tr>
        <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.nome }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.nomeUsuario }}</td>
            <td>{{ usuario.filial }}</td>
            <td>{{ usuario.setor }}</td>
            <td>{{ usuario.funcao }}</td>
            <td>
                <button>Editar</button>
                <button>Remover</button>
            </td>
        </tr>
      </table>
        <!-- {{ usuarios }} -->
    </section>
  </div>
</template>

<script>
import axios from "axios";
var cabec = new Headers();
cabec.append("Access-Control-Allow-Origin","*")
// var req = {headers: {"Access-Control-Allow-Origin":"*"}};

export default {
  name: "Usuario",
  data: function () {
    return {
        usuarios: [],
    }
  },
  created() {
    axios.get("http://localhost:8080/usuario/listar", cabec)
        .then((resposta) => {
            this.usuarios = resposta.data;
            }
        )
    },
}
</script>

<style></style>
