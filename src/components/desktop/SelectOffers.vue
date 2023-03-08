<template>
  <div class="background">
    <div class="content">
      <div class="heading">
        <h2>Adicionar bolsa</h2>
        <p>Filtre e adicione as bolsas do seu interesse.</p>
      </div>
      <div class="filter">
        <form>
          <label>
            <p>SELECIONE A SUA CIDADE</p>
            <select>
              <option v-for="data in data" :key="data">
                {{ data.campus.city }}
              </option>
            </select>
          </label>
          <label>
            <p>COMO VOCÊ QUER ESTUDAR?</p>
            <input type="checkbox" /> Presencial <input type="checkbox" /> A
            distância
          </label>
        </form>
        <form>
          <label>
            <p>SELECIONE O CURSO DE SUA PREFERÊNCIA</p>
            <select>
              <option v-for="data in data" :key="data">
                {{ data.course.level }}
              </option>
            </select>
          </label>
          <label>
            <p>ATÉ QUANTO PODE PAGAR?</p>
            <input type="range" class="range" />
          </label>
        </form>
      </div>
      <div class="results" v-if="showResults">
        <p>Resultado:</p>
        <p>ordenar por</p>
        <div class="result-offer" v-for="data in data" :key="data">
          <input type="checkbox" />
          <div class="ies-logo"><img :src="data.university.logo_url" /></div>
          <div class="course-content">
            <p>{{ data.course.name }}</p>
            <p>{{ data.course.level }}</p>
          </div>
          <div class="payment-offer">
            <p>Bolsa de {{ data.discount_percentage }}%</p>
            <p>R$ {{ data.price_with_discount }}/mês</p>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="cancell-buttom">Cancelar</button>
        <button class="add-buttom">Adicionar Bolsas</button>
      </div>
    </div>
  </div>
</template>

<script>
import Data from "@/db.json";
export default {
  name: "SelectOffers",
  data() {
    return {
      showResults: true,
      data: Data,
      cities: [{ name: "taubaté" }, { name: "sao paulo" }, { name: "solanea" }],
      course_levels: [{ name: "graduação" }, { name: "pós-graduação" }],
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