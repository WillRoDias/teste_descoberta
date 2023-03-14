<template>
  <SelectOffersMobile v-if="isModalVisible" @close="hideSelectOffers" />
  <div class="mobile-content">
    <div class="mobile-content-head-text">
      <h1>Bolsas favoritas</h1>
      <p>
        Adicione bolsas de cursos e faculdades do seu interesse e receba
        atualizações com as melhores ofertas disponíveis.
      </p>
    </div>
    <div class="mobile-content-filter">
      <nav>
        <ul>
          <li>
            <button @click="selectNoneSemester">Todos os semestres</button>
          </li>
          <div class="divider"></div>
          <li>
            <button @click="selectSecondSemester">2º semestre de 2019</button>
          </li>
          <div class="divider"></div>
          <li>
            <button @click="selectFirstSemester">1º semestre de 2020</button>
          </li>
        </ul>
      </nav>
    </div>
    <div class="mobile-content-cards">
      <div class="mobile-content-cards-new" @click="showSelectOffersMobile">
        <h2>Adicionar bolsa</h2>
        <p>Clique para adicionar bolsas de</p>
        <p>cursos do seu interesse</p>
      </div>
      <div class="mobile-content-cards-offers">
        <OfferCardMobile v-for="offer in filterOffers" :key="offer" :data="offer" />
      </div>
    </div>
  </div>
</template>

<script>
import OfferCardMobile from "@/components/mobile/OfferCardMobile.vue";
import SelectOffersMobile from "@/components/mobile/SelectOffersMobile.vue";

export default {
  name: "ContentMobile",
  props: {
    data: Object,
  },
  components: {
    OfferCardMobile,
    SelectOffersMobile,
  },
  data() {
    return {
      isModalVisible: false,
      offersFilter: "",
      userOffers: [],
    };
  },
  mounted() {
    this.userOffers = JSON.parse(localStorage.getItem("user-offers"));
  },
  computed: {
    filterOffers() {
      if (this.offersFilter === "") {
        return this.userOffers;
      } else {
        return this.userOffers.filter((offer) =>
          offer.enrollment_semester.includes(this.offersFilter)
        );
      }
    },
  },
  methods: {
    showSelectOffersMobile() {
      this.isModalVisible = true;
    },
    hideSelectOffers() {
      this.isModalVisible = false;
    },
    selectNoneSemester() {
      this.offersFilter = "";
    },
    selectSecondSemester() {
      this.offersFilter = "2019.2";
    },
    selectFirstSemester() {
      this.offersFilter = "2020.1";
    },
  },
};
</script>

<style scoped lang="scss" >
@import "@/styles/components/mobile/content_mobile.scss";
</style>
