<template>
  <div class="content">
    <h1>Bolsas favoritas</h1>
    <p>
      Adicione bolsas de cursos e faculdades do seu interesse e receba
      atualizações com as melhores ofertas disponíveis.
    </p>
    <nav>
      <a><p>Todos os semestres</p></a>
      <a><p>2º semestre de 2019</p></a>
      <a><p>1º semestre de 2020</p></a>
    </nav>
    <div class="cards">
      <div class="card">
        <h2>Adicionar bolsa</h2>
        <p>Clique para adicionar bolsas de</p>
        <p>cursos do seu interesse</p>
      </div>
      <OfferCard v-if="showOfferCard"/>
    </div>
  </div>
</template>

<script>
import OfferCard from "@/components/desktop/OfferCard.vue";
export default {
  name: "Content",
  components: {
    OfferCard,
  },
  data(){
    return{
      showOfferCard: true
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/components/desktop/_content.scss";
</style>