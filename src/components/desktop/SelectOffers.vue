<template>
  <div class="background">
    <div class="container">
      <div class="heading">
        <h2>Adicionar bolsa</h2>
        <p>Filtre e adicione as bolsas de seu interesse.</p>
      </div>
      <div class="filter">
        <div class="filter-left">
          <form>
            <label>
              <p>SELECIONE SUA CIDADE</p>
              <select>
                <option>1</option>
              </select>
            </label>
            <label>
              <p>COMO VOCÊ QUER ESTUDAR?</p>
              <div class="checkboxes">
                <input type="checkbox" />
                <p>Presencial</p>
                <input type="checkbox" />
                <p>A distância</p>
              </div>
            </label>
          </form>
        </div>
        <div class="filter-right">
          <form>
            <label>
              <p>SELECIONE O CURSO DE SUA PREFERÊNCIA</p>
              <select>
                <option>1</option>
              </select>
            </label>
            <label>
              <p>ATÉ QUANTO PODE PAGAR?</p>
              <div class="range-input">
                <input type="range" />
              </div>
            </label>
          </form>
        </div>
      </div>
      <div class="result-content">
        <div class="result-info">
          <p>Resultado:</p>
          <p>Ordenar por: nome</p>
        </div>
        <div class="load-results">
          <div class="results" v-for="offer in data" :key="offer">
            <input type="checkbox" />
            <div class="ies-offer-data">
              <div class="ies-logo">
                <img :src="offer.university.logo_url" alt="" />
              </div>
              <div class="course-info">
                <p>{{ offer.course.name }}</p>
                <p>{{ offer.course.level }}</p>
              </div>
              <div class="payment-info">
                <p>Bolsa de {{ offer.discount_percentage }}</p>
                <p>R$ {{ offer.price_with_discount }}/mês</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button>Cancela</button>
        <button>Adicionar bolsa(s)</button>
      </div>
    </div>
  </div>
</template>

<script>
import JsonData from "@/db.json";
export default {
  name: "SelectOffers",
  data() {
    return {
      showResults: true,
      data: JsonData,
    };
  },
  mounted() {
    console.log(this.data);
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/components/desktop/_select_offers.scss";
</style>