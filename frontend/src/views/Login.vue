<template>
  <div class="login">
    <section id="form-login">
      <form action="/usuario/autenticacao" method="POST">
      <h2>Login</h2>
        <div>
          <label>Usuário</label>
          <input type="text"/>
        </div>

        <div>
          <label>Senha</label>
          <input type="password"/>
        </div>

        <!-- <input type="submit"/> -->
        <router-link to="/app">Enviar</router-link>
      </form>
    </section>
  </div>
</template>

// Após o login vai ser redirecionado para SPA.vue


<script>
// @ is an alias to /src
// import SPA from "@/components/SPA.vue";

export default {
  name: "Login",
  components: {
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: space-evenly;

  width: 300px;
  height: 100%;
}

form div {
  display: flex;
  flex-direction: column;

  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1rem;
}


</style>