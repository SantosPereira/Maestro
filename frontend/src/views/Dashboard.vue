<template>
  <div>
    <Card></Card>
    <Grafico></Grafico>
  </div>
</template>

<script>
import Card from "../components/Card";
import Grafico from "../components/Grafico";

export default {
    name: "Dashboard",
    components: {
      Card,
      Grafico
    }
}
</script>

<style>

</style>