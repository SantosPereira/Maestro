<template>
  <div class="home">
    <header>
      <h1>Maestro</h1>
      <h3>O sistema ERP mais inteligente do mercado</h3>
    </header>

    <section id="rotas">
      <router-link to="/login"><button>Login</button></router-link> |
      <router-link to="/cadastro"><button>Cadastre-se</button></router-link>
    </section>
    <router-view></router-view>

  </div>
</template>

<script>
// @ is an alias to /src
// import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {},
};
</script>


<style scoped>
#rotas {
  display: flex;
}

</style>