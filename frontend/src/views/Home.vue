<template>
  <div class="home">
    <header>
      <div>
        <h1>Maestro</h1>
        <h3>O sistema ERP mais inteligente do mercado</h3>
      </div>
      <div id="metodo-entrada">
        <button @click="defVisivel(false)">Login</button>
        <button @click="defVisivel(true)">Cadastro</button>
      </div>
    </header>
    <div id="corpo">
      <section id="artigo">
        <h2>Faça seu negócio se gerenciar sozinho</h2>
        <article>
          <p>
            Com o nosso sistema ERP inteligente, você pode gerenciar seu negócio
            de uma forma simples e eficaz
          </p>
          <p>
            e com a ajuda de nossos modelos de inteligência artificial, seu
            negócio se gerencia sozinho
          </p>
        </article>
      </section>
      <section>
        <div id="login" v-if="!visivel">
          <section id="form-login">
            <form action="/usuario/autenticacao" method="POST">
              <h2>Login</h2>
              <div>
                <label>Usuário</label>
                <input type="text" />
              </div>

              <div>
                <label>Senha</label>
                <input type="password" />
              </div>

              <!-- <input type="submit"/> -->
              <router-link to="/app">Enviar</router-link>
            </form>
          </section>
        </div>

        <div id="cadastro" v-if="visivel">
          <section id="form-cadastro">
            <h2>Cadastre-se</h2>
            <form action="/usuario/cadastrar" method="POST">
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
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {},
  data: function () {
    return {
      visivel: true,
    };
  },
  methods: {
    defVisivel: function (e) {
      this.visivel = e;
    },
  },
};
</script>


<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

header div {
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;

  margin-bottom: 2rem;
}

#metodo-entrada {
  display: flex;
  flex-direction: row;
  padding: 1rem;
}

#metodo-entrada button {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

#rotas {
  display: flex;
}

#corpo {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 4rem;
}

/* #artigo {
  width: 40%;
} */

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