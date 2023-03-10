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
      <OfferCard  v-for="offer in data" :key="offer" :data="offer"/>
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
  data() {
    return {
      showOfferCard: true,
      data: [
        {
          full_price: 2139.64,
          price_with_discount: 706.08,
          discount_percentage: 67.0,
          start_date: "01/08/2019",
          enrollment_semester: "2019.2",
          enabled: true,
          course: {
            name: "Engenharia Mecânica",
            kind: "Presencial",
            level: "Bacharelado",
            shift: "Noite",
          },
          university: {
            name: "UNIP",
            score: 4.5,
            logo_url: "https://www.tryimg.com/u/2019/04/16/unip.png",
          },
          campus: {
            name: "Jardim das Indústrias",
            city: "São José dos Campos",
          },
        },
        {
          full_price: 1227.05,
          price_with_discount: 515.36,
          discount_percentage: 58.0,
          start_date: "01/08/2019",
          enrollment_semester: "2019.2",
          enabled: true,
          course: {
            name: "Jornalismo",
            kind: "Presencial",
            level: "Bacharelado",
            shift: "Noite",
          },
          university: {
            name: "UNIP",
            score: 4.5,
            logo_url: "https://www.tryimg.com/u/2019/04/16/unip.png",
          },
          campus: {
            name: "Água Branca",
            city: "São Paulo",
          },
        },
        {
          full_price: 1487.31,
          price_with_discount: 520.56,
          discount_percentage: 65.0,
          start_date: "01/08/2019",
          enrollment_semester: "2019.2",
          enabled: true,
          course: {
            name: "Biomedicina",
            kind: "Presencial",
            level: "Bacharelado",
            shift: "Noite",
          },
          university: {
            name: "UNIP",
            score: 4.5,
            logo_url: "https://www.tryimg.com/u/2019/04/16/unip.png",
          },
          campus: {
            name: "Jaguaré",
            city: "São Paulo",
          },
        },
      ],
    };
  },
  props:{
    data: Object
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/components/desktop/_content.scss";
</style>