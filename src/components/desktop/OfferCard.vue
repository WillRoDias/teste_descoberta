<template>
  <div class="card">
    <div class="ies-course-info">
      <div class="ies-logo"></div>
      <p>{{ ies.name }}</p>
      <p>{{ offer.course }}</p>
      <p>{{ ies.rating }}</p>
    </div>
    <div class="course-info">
      <p>{{ offer.kind }}</p>
      <p>{{ offer.shift }}</p>
    </div>
    <div class="qb-course-info">
      <p>Mensalidade com o Quero Bolsa:</p>
      <p>R$ {{offer.value}}</p>
      <p>R$ {{offer.qb_value}} /mês</p>
    </div>
    <a>Excluir</a>
    <a>Ver oferta</a>
  </div>
</template>

<script>
export default {
  name: "OfferCard",
  data() {
    return {
      ies: {
        name: 'Anhanguera',
        rating: '3,5'
      },
      offer: {
        course: 'estética e cosmética',
        kind: 'NOITE',
        shift: 'PRESENCIAL',
        value: '1.487,31',
        qb_value: '453,63',
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/components/desktop/_offer_card.scss";
</style>