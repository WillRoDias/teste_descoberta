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
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJklEQVR4nO1aSWtUQRAucYso7ttRj6Kof8J9Fzy43dwuidEIeV2T2N6UvKqJcQH9Cx4VFQUVV1yjXoxxOak5iHpzQyVS1f3eDCQvzoxvZl7EDx68pHu6q7qrq6q/egD/8a/C8lQwtB4Mh4B0Hgw9B+RPYPi7PvKO3OPapE9+HQSHp0AmYG0DBOF2QL4Mhn8Bcn95D/0EpEtgeBs0do2tvQL7eBwYbgFDfUVCfQOkq4DUrjvT1jlPV3zX6dH6yLv8z+3aQTB8zf0mVuwd5Gi/Lk5NgOEqQHodC2DoASDtgNYjk8oey3ZOBsM7AflhYTx+BRiuqIrsblLbAEinihR4BEF+aWrjB7wcDD0uGv9k+rtzoGO2Cu4m+AyGGmHTmZHpTgKgYxraC0hf4t02R2elM3gunOu2W1eqB0y4AKoN07EQkHv92XupMvzdgF0zCgPyfbA0HWqF4PAUQLrllXmtVlERxD4jc0K6Ay3heKg1WsLxgHw3NrOKzkzhYPdosKsXguPTYqsQB1C+i40Odg3ORElnhpwDEO9WcrCL4oR4p6wAuTk+/CWZWEAH4jhRDRdbKawdBUhPvLk3D91Z8h1JFZwiSyBrCHill61v6F2R5C3yEJlE/4hCYOYtyf0ki3V2uCO1udV90p3UxjO828t4cfAO4mJdWv2togQwCVHulGagNHrH+TG4nMgb/JZdSW3SaigiMHzdjZtfAwOARH7L2iH7ihzyZ7ljkAnpvAs4tDbzimBkPXR2YKPhF9oot7isK9KWn+8VeT6w0dBHbUw7r6qGIpam+2PwfmCjYzr6wdoxZQ9s+Gb5xEN8tb1Z9nyNGrgdT5AZRZBupKwIDR/TMnrhSzStf+Swo3e/wgBmfkfCjcnuNwqIQp4N64BoaL23u6vDJkUJaHUSa+GSRmEAs6qIFbLcJ422a2LCpHTJm9fO1CZW11yBi00C5vd4GS8k9oEcbfUr+BAyif4RgNytMuZo89CBxtBbf1aWQdYQ0Gq/0G/+XIYQat917s4e+cBPvWxNpfygIeZ6hVDOCnLxAveWXhSS+oQzry9KjtUb2LkYDH91LrfcUobQk9EKCG1ZLxjJq+ill+VYpST2Az/A3bqQ2PbEBDB0z5v5vcrrjLIarjrrygryd61gNfDdjstxf13wkSJLYWt7oZUXQS3OBPo5JStv7ZyTzsCyGrGZKSverO4wbVg7Sr1TdLDFnGw4M+1JGoocgCj0JL3qq0RsLWU8Lbo9Hqtu7V3qEwVTc6y90JiVfMWg7KbmTi7tQG9KaVaL/1yq5uZCOqMCSEZ6HZCs8k5yixO3LRyAPPIuRSO9FJHVvhFPEKUdyE31+QJCczPeooSyXgHKZlB+6M1UEsC6KDAYhFAWLlZubcjn/Ac0Hwof1cg7PdPrqfbJr0m+T/wHDHv8Bh9ZUo0vxNV9AAAAAElFTkSuQmCC">
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
