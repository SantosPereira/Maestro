<template>
  <div>
    <h1>Usuários</h1>
    <section>
      <!-- <h3>Lista de Usuários</h3> -->
      <header>
        <router-link to="/usuario/cadastrar"><button>Cadastrar usuário</button></router-link>
        <div>
          <form action="/listar" method="get">
            <input type="text" placeholder="Nome" />
            <input id="button" type="submit" value="Pesquisar" />
          </form>
          <button @click="atualizar()">Atualizar</button>
        </div>
      </header>
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
              <router-link v-bind:to="'/usuario/editar/'+usuario.id">
                <button class="editar">Editar</button>
              </router-link>
                <button class="remover" @click="remover(usuario.id)">Remover</button>
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
  methods: {
    editar: function(id) {
      axios.get("http://localhost:8080/usuario/editar/"+id, cabec)
          .then((resposta) => {
              console.log(resposta.data);
              }
          )

    },
    remover: function(id) {
      axios.get("http://localhost:8080/usuario/remover/"+id, cabec)
          .then((resposta) => {
              console.log(resposta.data);
              }
          )

    },
    atualizar: function() {
      axios.get("http://localhost:8080/usuario/listar", cabec)
        .then((resposta) => {
            this.usuarios = resposta.data;
            }
        )
    },
  }
}
</script>

<style scoped>
div h1 {
  margin-top: 1rem;
  font-size: 3rem;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
header div form input {
  margin-left: 0.6rem;
}
header div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content:space-between;
  width: 21rem
}
table {
  color: black;
  padding: 1px;
  /* padding-top: 2px; */
  /* border: 1px solid black; */
  border-radius: 10px;
  /* background-color: rgba(221, 221, 221, 0.6); */
}
td {
  padding: 0.5rem;
  /* color: aliceblue; */
  border: 1px solid rgba(163, 163, 163, 0.5);
}
th {
  border-radius: 2px;
  /* color: aliceblue; */
  padding: 0.5rem;
  padding-left: 0;
  padding-right: 0;
  background-color: rgb(158, 157, 157);
}
button, #button {
  padding: 3px;
}
.editar {
  color: white;
  background-color: rgb(99, 202, 67);
  border-radius: 5px;
  border-style: none;
}
.remover {
  color: white;
  background-color: rgb(247, 52, 52);
  border-radius: 5px;
  border-style: none;
}
</style>
