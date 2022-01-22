<template>
  <div class="cadastro">
    <section id="form-cadastro">
      <h2>Cadastre-se</h2>
      <form action="localhost:8080/usuario/cadastrar" method="POST">
        <div>
          <label>Nome</label>
          <input type="text" />
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" />
        </div>
        <div>
          <label>Usuário</label>
          <input type="text" />
        </div>
        <div>
          <label>Senha</label>
          <input type="password" />
        </div>

        <!-- <input type="submit" /> -->
        <router-link to="/login">Enviar</router-link>
      </form>
    </section>
  </div>
</template>

// Após o login vai ser redirecionado para Login.vue

<script>
export default {
  name: "Cadastro",
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
