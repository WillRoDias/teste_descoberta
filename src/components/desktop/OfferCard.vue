<template>
  <div class="card">
    <div class="card-ies-info">
      <div class="card-ies-logo">
        <img :src="data.university.logo_url" alt="" />
      </div>
      <p>{{ data.university.name }}</p>
      <p class="card-course-name">{{ data.course.name }}</p>
      <p>{{ data.university.score }}</p>
    </div>
    <div class="card-offer-info">
      <p>{{ data.course.kind }} * {{ data.course.shift }}</p>
      <p class="card-offer-info-start-date">
        Início das aulas em: {{ data.start_date }}
      </p>
    </div>
    <div class="card-offer-prices">
      <p>Mensalidade com o Quero Bolsa:</p>
      <div class="card-offer-prices-prices-format">
        <p class="card-offer-prices-full-price">
          <del>R$ {{ data.full_price }}</del>
        </p>
        <div class="card-offer-prices-discount">
          <p class="card-offer-prices-discount-price">
            R$ {{ data.price_with_discount }}
          </p>
          <p class="card-offer-prices-discount-month">/mês</p>
        </div>
      </div>
    </div>
    <div class="card-buttons">
      <button class="delete" @click="deleteOffer">Excluir</button>
      <button class="view" v-if="data.enabled">Ver Oferta</button>
      <button class="disabled" v-if="!data.enabled">Indisponível</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferCard",
  props: {
    data: Object,
  },
  methods: {
    deleteOffer(){
      let userOffers = JSON.parse(localStorage.getItem('user-offers'))
      userOffers.splice(this.data.id, 1)
      localStorage.setItem('user-offers', JSON.stringify(userOffers))
      window.location.reload();
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/components/desktop/_offer_card.scss";
</style>