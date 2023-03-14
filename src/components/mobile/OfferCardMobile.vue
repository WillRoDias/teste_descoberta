<template>
  <div class="offer-card">
    <div class="offer-card-content">
      <div class="offer-card-content-ies-info">
        <div class="offer-card-content-ies-info-logo">
          <img :src="data.university.logo_url" alt="" />
        </div>
        <div class="offer-card-content-ies-info-name">
          <p><b>{{ data.university.name }}</b></p>
        </div>
        <div class="offer-card-content-ies-info-course">
          <p><b>{{ data.course.name }}</b></p>
        </div>
        <div class="offer-card-content-ies-info-rating">
          <p><b>{{ data.university.score }}</b></p>
        </div>
      </div>
      <div class="divider" />
      <div class="offer-card-content-course-info">
        <div class="offer-card-content-course-info-infos">
          <p><b>{{ data.course.kind }} * {{ data.course.shift }}</b></p>
        </div>
        <div class="offer-card-content-course-info-start-date">
          <p>Início das aulas em: {{ data.start_date }}</p>
        </div>
      </div>
      <div class="divider" />
      <div class="offer-card-content-money">
        <p><b>Mensalidade com o Quero Bolsa:</b></p>
        <p>
          <del>R$ {{ data.full_price }}</del>
        </p>
        <div class="offer-card-content-money-dicount-price">
          <p class="offer-card-content-money-dicount-price-discount">
            R$ {{ data.price_with_discount }}
          </p>
          <p>/mês</p>
        </div>
      </div>
      <div class="offer-card-content-buttons">
        <button class="delete">Excluir</button>
        <button class="view-offer" v-if="data.enabled">Ver Oferta</button>
        <button class="view-offer-disabled" v-if="!data.enabled">Indisponível</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferCardMobile",
  props: {
    data: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/mobile/offer_card_mobile.scss";
</style>