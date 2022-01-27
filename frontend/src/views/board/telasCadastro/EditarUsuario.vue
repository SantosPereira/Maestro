<template>
  <div>
    <section>
      <!-- <form :action="'http://localhost:8080/usuario/editar/'+this.$route.params.id" method="post"> -->
      <form name="formulario" v-bind="formulario">
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
            <option>{{ dados.funcao }}</option>
            <option value="Gerente" >Gerente</option>
            <option value="Estoquista" >Estoquista</option>
            <option value="Caixa" >Caixa</option>
        </select>

        <button @click="editar()">
            <router-link to="/usuario">Enviar</router-link>
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
  name: "EditarUsuario",
  data: function() {
      return {
          dados: null,
      }
  },
  created() {
      axios.get("http://localhost:8080/usuario/editar/"+this.$route.params.id, cabec)
        .then((resposta) => {
            this.dados = resposta.data;
            console.log(resposta.data);
            }
        )
    },
    methods: {
      editar: function() {
        var queryString = new URLSearchParams(this.dados).toString()
        axios.post("http://localhost:8080/usuario/editar/"+this.$route.params.id+"?"+queryString, cabec)
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