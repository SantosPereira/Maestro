<template>
  <div>
    <section>
      <form>
        <label>Nome</label>
        <input type="text" v-model="dados.nome"/>

        <label>E-mail</label>
        <input type="email" v-model="dados.email"/>

        <label>Nome de usuário</label>
        <input type="text" v-model="dados.nomeUsuario"/>

        <label>Filial</label>
        <input type="text" v-model="dados.filial"/>

        <label>Setor</label>
        <input type="text" v-model="dados.setor"/>

        <label>Função</label>
        <select v-model="dados.funcao">
            <option value="Gerente" >Gerente</option>
            <option value="Estoquista" >Estoquista</option>
            <option value="Caixa" >Caixa</option>
        </select>
        <button @click="cadastrar()">
          <router-link to="/usuario">Cadastrar</router-link>
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
var cabec = new Headers();
cabec.append("Access-Control-Allow-Origin","*")
export default {
  name: "CadastroUsuario",
  data: function() {
      return {
          dados: {
            nome: '',
            email: '',
            nomeUsuario: '',
            filial: '',
            setor: '',
            funcao: ''
          },
      }
  },
  methods: {
    cadastrar: function() {
      var queryString = new URLSearchParams(this.dados).toString()
        axios.post("http://localhost:8080/usuario/cadastrar/"+"?"+queryString, cabec)
          .then((resposta) => {
              console.log(resposta.data);
              }
          )
    }
  }
};
</script>

<style>
</style>