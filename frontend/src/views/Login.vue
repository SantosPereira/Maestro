<template>
  <div class="login">
    <section></section>
    <section id="form-login">
      <form action="localhost:8080/usuario/autenticacao" method="POST">
        <label>Usuário</label>
        <input type="text"/>

        <label>Senha</label>
        <input type="password"/>

        <input type="submit"/>
      </form>
    </section>
  </div>
</template>

// Após o login vai ser redirecionado para SPA.vue


<script>
// @ is an alias to /src
// import Menu from "@/components/Menu.vue";

export default {
  name: "Login",
  components: {},
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
}


</style>