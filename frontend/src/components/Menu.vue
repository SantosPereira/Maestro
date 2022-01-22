<template>
  <div id="menu">
      <h2>Menu</h2>
      <section>
        <a><span>Estoque</span></a>
        <a><span>Usuário</span></a>
        <a><span>Dispositivo</span></a>
        <a><span>Relatórios</span></a>
      </section>
  </div>
</template>

<script>
export default {
    name: "Menu",
}
</script>

<style scoped>
  #menu {
    position: absolute;
    float: left;

    background-color: rgb(42,42,42);
    color: aliceblue;

    margin-top: -78px;
    padding-top: 40px;

    width: 16rem;
    height: 100%;
  }

  #menu h2 {
    font-size: 2.5rem;

    padding-bottom: 20px;
  }

  #menu section {
    font-size: 1rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;
    
    height: 10rem;
  }
</style>
