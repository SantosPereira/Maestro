<template>
  <div id="aplicacao">
    <router-link to="/">Home</router-link>
    <router-link to="/">Usuário</router-link>
    <router-link to="/">Estoque</router-link>
    <router-link to="/">Produto</router-link>
    <router-link to="/">Dispositivo</router-link>
    <router-link to="/sobre">Sobre</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: "SPA",
}
</script>

<style scoped></style>
