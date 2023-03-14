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
          <li><button>Todos os semestres</button></li>
          <div class="divider"></div>
          <li><button>2º semestre de 2019</button></li>
          <div class="divider"></div>
          <li><button>1º semestre de 2020</button></li>
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
        <OfferCardMobile v-for="offer in data" :key="offer" :data="offer" />
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
      data: [
        {
          full_price: 2139.64,
          price_with_discount: 706.08,
          discount_percentage: 67.0,
          start_date: "01/08/2019",
          enrollment_semester: "2019.2",
          enabled: true,
          course: {
            name: "Engenharia Mecânica",
            kind: "Presencial",
            level: "Bacharelado",
            shift: "Noite",
          },
          university: {
            name: "UNIP",
            score: 4.5,
            logo_url: "https://www.tryimg.com/u/2019/04/16/unip.png",
          },
          campus: {
            name: "Jardim das Indústrias",
            city: "São José dos Campos",
          },
        },
      ],
    };
  },
  methods: {
    showSelectOffersMobile(){
      this.isModalVisible = true
    }
  }
};
</script>

<style scoped lang="scss" >
@import "@/styles/components/mobile/content_mobile.scss";
</style>
