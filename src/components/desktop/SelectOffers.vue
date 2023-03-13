<template>
  <div class="background">
    <div class="close-btn">
      <button @click="closeModal" class="close-btn-button">X</button>
    </div>
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
                <option />
                <option v-for="city in uniqCities" :key="city">
                  {{ city }}
                </option>
              </select>
            </label>
            <label>
              <p>COMO VOCÊ QUER ESTUDAR?</p>
              <div class="checkboxes">
                <label>
                  <input
                    type="radio"
                    v-model="filterData.kind"
                    :value="'Presencial'"
                  />
                  Presencial
                </label>
                <label
                  ><input
                    type="radio"
                    v-model="filterData.kind"
                    :value="'EaD'"
                  />
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
              <select v-model="filterData.name">
                <option />
                <option v-for="name in uniqCourses" :key="name">
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
          <div class="results" v-for="offer in filterOffers" :key="offer">
            <input type="checkbox" :value="offer" v-model="offerSelected" />
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
        <button class="cancel" @click="closeModal">Cancela</button>
        <button class="add" @click="addOffers">Adicionar bolsa(s)</button>
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
      data: JsonData,
      offerSelected: [],
      filterData: {
        city: "",
        name: "",
        rangeValue: 100,
        kind: "",
      },
    };
  },

  methods: {
    closeModal() {
      this.$emit("close");
    },
    addOffers() {
      let userOffers = localStorage.getItem("user-offers")
        ? JSON.parse(localStorage.getItem("user-offers"))
        : [];
      Array.prototype.push.apply(userOffers, this.offerSelected);
      localStorage.setItem("user-offers", JSON.stringify(userOffers));
      this.closeModal();
    },
  },

  computed: {
    uniqCities() {
      return this.data
        .filter(
          (objeto, indice, self) =>
            self.findIndex((t) => t.campus.city === objeto.campus.city) ===
            indice
        )
        .map((objeto) => objeto.campus.city);
    },
    uniqCourses() {
      return this.data
        .filter(
          (objeto, indice, self) =>
            self.findIndex((t) => t.course.name === objeto.course.name) ===
            indice
        )
        .map((objeto) => objeto.course.name);
    },
    filterOffers() {
      return this.data.filter(
        (offer) =>
          offer.campus.city.includes(this.filterData.city) &&
          offer.course.kind.includes(this.filterData.kind) &&
          offer.course.name.includes(this.filterData.name)
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/components/desktop/_select_offers.scss";
</style>