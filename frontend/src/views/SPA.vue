<template>
  <div id="aplicacao">
    <div id="canva">
      <router-view></router-view>
    </div>
    <section id="menu">
      <router-link to="/dashboard">Home</router-link>
      <router-link to="/usuario">Usuário</router-link>
      <router-link to="/estoque">Estoque</router-link>
      <router-link to="/produto">Produto</router-link>
      <router-link to="/dispositivo">Dispositivo</router-link>
      <router-link to="/sobre">Sobre</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "SPA",
};
</script>

<style scoped>
</style>
