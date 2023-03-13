<template>
  <SelectOffers v-if="isModalVisible" @close="hideSelectOffers" />
  <div class="content">
    <h1>Bolsas favoritas</h1>
    <p>
      Adicione bolsas de cursos e faculdades do seu interesse e receba
      atualizações com as melhores ofertas disponíveis.
    </p>
    <div class="filter">
      <nav>
        <a @click="selectNoneSemester"><p>Todos os semestres</p></a>
        <a @click="selectSecondSemester"><p>2º semestre de 2019</p></a>
        <a @click="selectFirstSemester"><p>1º semestre de 2020</p></a>
      </nav>
    </div>
    <div class="cards">
      <div class="card-add" @click="showSelectOffers">
        <h2>Adicionar bolsa</h2>
        <p>Clique para adicionar bolsas de</p>
        <p>cursos do seu interesse</p>
      </div>
      <OfferCard v-for="offer in filterOffers" :key="offer" :data="offer" />
    </div>
  </div>
</template>

<script>
import OfferCard from "@/components/desktop/OfferCard.vue";
import SelectOffers from "@/components/desktop/SelectOffers.vue";

export default {
  name: "Content",
  components: {
    OfferCard,
    SelectOffers,
  },
  data() {
    return {
      isShowModal: false,
      showOfferCard: true,
      isModalVisible: false,
      userOffers: [],
      offersFilter: "",
    };
  },
  methods: {
    hideSelectOffers() {
      this.isModalVisible = false;
    },
    showSelectOffers() {
      this.isModalVisible = true;
    },
    selectSecondSemester() {
      this.offersFilter = "2019.2";
    },
    selectFirstSemester() {
      this.offersFilter = "2020.1";
    },
    selectNoneSemester() {
      this.offersFilter = "";
    },
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
  mounted() {
    this.userOffers = JSON.parse(localStorage.getItem("user-offers"));
  },
  props: {
    data: Object,
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/components/desktop/_content.scss";
</style>