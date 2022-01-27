<template>
  <div>
    <section>
      <h1>Editar dispositivo</h1>
      <!-- <form :action="'http://localhost:8080/dispositivo/editar/'+this.$route.params.id" method="post"> -->
      <form name="formulario" v-bind="formulario">
        <div>
          <label>Nome</label>
          <input type="text" v-model="dados.nome" />
        </div>

        <div>
          <label>IMEI</label>
          <input type="text" v-model="dados.imei" />
        </div>

        <div>
          <label>Modelo</label>
          <input type="text" v-model="dados.modelo" />
        </div>

        <button class="enviar" @click="editar()">
          <router-link to="/dispositivo">Enviar</router-link>
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
  name: "EditarDispositivo",
  data: function () {
    return {
      dados: {
        nome: '',
        imei: '',
        modelo: ''
      },
    };
  },
  created() {
    axios
      .get(
        "http://localhost:8080/dispositivo/editar/" + this.$route.params.id,
        cabec
      )
      .then((resposta) => {
        this.dados = resposta.data;
        console.log(resposta.data);
      });
  },
  methods: {
    editar: function () {
      var queryString = new URLSearchParams(this.dados).toString();
      axios
        .post(
          "http://localhost:8080/dispositivo/editar/" +
            this.dados.id +
            "?" +
            queryString,
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
  width: 50rem;
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
}#enviar {
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