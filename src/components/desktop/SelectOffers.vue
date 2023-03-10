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
              <select v-model="filterData.city">
                <option v-for="city in uniqCities">
                  {{ city }}
                </option>
              </select>
            </label>
            <label>
              <p>COMO VOCÊ QUER ESTUDAR?</p>
              <div class="checkboxes">
                <label>
                  <input
                    type="checkbox"
                    v-model="filterData.kindValuePresencial"
                  />
                  Presencial
                </label>
                <label
                  ><input type="checkbox" v-model="filterData.kindValueEAD" />
                  A distância
                </label>
              </div>
            </label>
          </form>
        </div>
        <div class="filter-right">
          <form>
            <label>
              <p>SELECIONE O CURSO DE SUA PREFERÊNCIA</p>
              <select>
                <option v-for="name in uniqCourses">
                  {{ name }}
                </option>
              </select>
            </label>
          </form>
          <form>
            <label>
              <p>ATÉ QUANTO PODE PAGAR?</p>
              <div class="range-input">
                <p>R$ {{ filterData.rangeValue }}</p>
                <input
                  type="range"
                  v-model="filterData.rangeValue"
                  min="100"
                  max="10000"
                  step="1"
                />
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
        <button class="cancel">Cancela</button>
        <button class="add">Adicionar bolsa(s)</button>
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
      filterData: {
        city: '',
        rangeValue: 100,
        kindValuePresencial: "",
        kindValueEAD: "",
      },
    };
  },

  computed: {
    uniqCities() {
      return this.data.filter((objeto, indice, self) =>
        self.findIndex(t => t.campus.city === objeto.campus.city) === indice
      ).map(objeto => objeto.campus.city);
    },
    uniqCourses() {
      return this.data.filter((objeto, indice, self) =>
        self.findIndex(t => t.course.name === objeto.course.name) === indice
      ).map(objeto => objeto.course.name);
    },
    filterData() {
      return this.data.filter((objeto, indice, self) =>
        self.findIndex(t => t.campus.city === objeto.campus.city) === indice
      ).map(objeto => objeto.campus.city);
    },
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/components/desktop/_select_offers.scss";
</style>