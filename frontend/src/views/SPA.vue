<template>
  <div id="aplicacao">
    <section id="menu">
      <h2>Menu</h2>
      <section>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/usuario">Usuário</router-link>
        <router-link to="/estoque">Estoque</router-link>
        <router-link to="/produto">Produto</router-link>
        <router-link to="/dispositivo">Dispositivo</router-link>
        <router-link to="/sobre">Sobre</router-link>
      </section>
    </section>
    <div id="canva">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "SPA",
  data: function() {
    return {
      botaoMenu: "»",
      visi: "visible"
    }
  },
  methods: {
    fechaMenu: function() {
      this.visi = "hidden";
    }
  }
};
</script>
<style scoped>
#aplicacao {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* position: relative; */
  height: 100%;
}
#menu {
  /* position: absolute; */
  float: left;
  background-color: rgb(7, 5, 12);
  color: aliceblue;
  padding-top: 40px;
  width: 16rem;
  /* height: 100%; */
}
#menu h2 {
  font-size: 2.5rem;
  padding-bottom: 20px;
}
/* #menu h2::after {
  content: " »";
} */
#menu section {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
}
#canva {
  /* position: relative; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 85%;
  height: 100%;
}
</style>
