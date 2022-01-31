<template>
  <div>
    <section>
      <h1>Cadastrar usuário</h1>
      <form>
        <div>
          <label>Nome</label>
          <input type="text" v-model="dados.nome" />
        </div>

        <div>
          <label>E-mail</label>
          <input type="email" v-model="dados.email" />
        </div>

        <div>
          <label>Nome de usuário</label>
          <input type="text" v-model="dados.nomeUsuario" />
        </div>

        <div>
          <label>Filial</label>
          <input type="text" v-model="dados.filial" />
        </div>

        <div>
          <label>Setor</label>
          <input type="text" v-model="dados.setor" />
        </div>

        <div>
          <label>Função</label>
          <select v-model="dados.funcao">
            <option value="Gerente">Gerente</option>
            <option value="Estoquista">Estoquista</option>
            <option value="Caixa">Caixa</option>
          </select>
        </div>
        <button class="enviar" @click="cadastrar()">
          <router-link to="/usuario">Cadastrar</router-link>
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
var cabec = new Headers();
cabec.append("Access-Control-Allow-Origin", "*");
export default {
  name: "CadastroUsuario",
  data: function () {
    return {
      dados: {
        nome: "",
        email: "",
        nomeUsuario: "",
        filial: "",
        setor: "",
        funcao: "",
      },
    };
  },
  methods: {
    cadastrar: function () {
      var queryString = new URLSearchParams(this.dados).toString();
      axios
        .post(
          "http://localhost:8080/usuario/cadastrar/" + "?" + queryString,
          cabec
        )
        .then((resposta) => {
          console.log(resposta.data);
        });
    },
  },
};
</script>

<style scoped>
label {
  text-align: start;
}
h1 {
  margin-top: 1rem;
  font-size: 3rem;
  margin-bottom: 2rem;
}
form {
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  padding: 1rem;
  font-size: 1.5rem;
  justify-content: center;
}
form div {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}
input,
select {
  font-size: 1.2rem;
  width: 40rem;
}
button,
#button {
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
#enviar {
  width: 15rem;
  font-size: 3rem;
}
.enviar {
  width: 15rem;
  font-size: 3rem;
  color: rgb(255, 255, 255);
  background-color: rgb(43, 42, 42);
  border-style: none;
  border-radius: 10px;
}
a {
  color: rgb(255, 255, 255);
}
</style>