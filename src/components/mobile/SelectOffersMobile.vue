<template>
  <div class="select-ofrs-bg">
    <div class="close-modal">
      <button class="close-modal-btn" @click="closeModal" >X</button>
    </div>
    <div class="select-ofrs-bg-cont">
      <div class="select-ofrs-bg-cont-inner">
        <div class="select-ofrs-bg-cont-inner-heading">
          <h1>Adicionar bolsa</h1>
          <p>Filtre e adicione as bolsas de seu interesse.</p>
        </div>
        <div class="select-ofrs-bg-cont-inner-form">
          <form>
            <div class="select-ofrs-bg-cont-inner-form-fir-select">
              <label>
                <p><b>SELECIONE SUA CIDADE</b></p>
                <select v-model="filterData.city">
                  <option />
                  <option v-for="city in uniqCities" :key="city">
                    {{ city }}
                  </option>
                </select>
              </label>
            </div>
            <div class="select-ofrs-bg-cont-inner-form-sec-select">
              <label>
                <p><b>SELECIONE O CURSO DE SUA PREFERÊNCIA</b></p>
                <select v-model="filterData.name">
                  <option />
                  <option v-for="name in uniqCourses" :key="name">
                    {{ name }}
                  </option>
                </select>
              </label>
            </div>
            <div class="select-ofrs-bg-cont-inner-form-radio">
              <label>
                <p><b>COMO VOCÊ QUER ESTUDAR?</b></p>
                <div class="select-ofrs-bg-cont-inner-form-radio-inputs">
                  <label>
                    <input
                      type="radio"
                      v-model="filterData.kind"
                      :value="'Presencial'"
                    />
                    <p>Presencial</p>
                    <input
                      type="radio"
                      v-model="filterData.kind"
                      :value="'EaD'"
                    />
                    <p>A distância</p>
                  </label>
                </div>
              </label>
            </div>
            <div class="select-ofrs-bg-cont-inner-form-range">
              <label>
                <p><b>ATÉ QUANTO PODE PAGAR?</b></p>
                <p>R$ 100,00</p>
                <input
                  type="range"
                  v-model="filterData.rangeValue"
                  min="100"
                  max="10000"
                  step="1"
                />
              </label>
            </div>
          </form>
        </div>
        <div class="select-ofrs-bg-cont-inner-results">
          <div class="select-ofrs-bg-cont-inner-results-heading">
            <p><b>Resultado:</b></p>
            <p><b>Ordenar por</b></p>
          </div>
          <div class="divider"></div>
          <div class="select-ofrs-bg-cont-inner-results-loader">
            <div
              class="select-ofrs-bg-cont-inner-results-loader-each"
              v-for="offer in filterOffers"
              :key="offer"
            >
              <form>
                <input type="checkbox" :value="offer" v-model="offerSelected" />
              </form>
              <div class="ies-logo">
                <img :src="offer.university.logo_url" />
              </div>
              <div class="offer-data">
                <div class="offer-data-course">
                  <p class="course-name">
                    <b>{{ offer.course.name }}</b>
                  </p>
                  <p>{{ offer.course.level }}</p>
                </div>
                <div class="offer-data-money">
                  <div class="offer-data-percentage">
                    <p>Bolsa de:</p>
                    <p class="p-green">
                      <b>{{ offer.discount_percentage }}%</b>
                    </p>
                  </div>
                  <div class="offer-data-value">
                    <p class="p-green">
                      <b>R${{ offer.price_with_discount }}</b>
                    </p>
                    <p>/mês</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="select-ofrs-bg-cont-inner-btn">
          <button class="cancel" @click="closeModal">Cancelar</button>
          <button class="add" @click="addOffers">Adicionar bolsas</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JsonData from "@/db.json";

export default {
  name: "SelectOffersMobile",
  data() {
    return {
      offerSelected: [],
      filterData: {
        city: "",
        name: "",
        rangeValue: 100,
        kind: "",
      },
      data: JsonData,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
      window.location.reload();
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

<style lang="scss" scoped>
@import "@/styles/components/mobile/_select_offers_mobile.scss";
</style>