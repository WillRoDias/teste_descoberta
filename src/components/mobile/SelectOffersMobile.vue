<template>
  <div class="select-ofrs-bg">
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
                <select>
                  <option>
                    <p>São Paulo</p>
                  </option>
                </select>
              </label>
            </div>
            <div class="select-ofrs-bg-cont-inner-form-sec-select">
              <label>
                <p><b>SELECIONE O CURSO DE SUA PREFERÊNCIA</b></p>
                <select>
                  <option>
                    <p>Estética e Cosmética</p>
                  </option>
                </select>
              </label>
            </div>
            <div class="select-ofrs-bg-cont-inner-form-radio">
              <label>
                <p><b>COMO VOCÊ QUER ESTUDAR?</b></p>
                <div class="select-ofrs-bg-cont-inner-form-radio-inputs">
                  <label>
                    <input type="radio" />
                    <p>Presencial</p>
                    <input type="radio" />
                    <p>A distância</p>
                  </label>
                </div>
              </label>
            </div>
            <div class="select-ofrs-bg-cont-inner-form-range">
              <label>
                <p><b>ATÉ QUANTO PODE PAGAR?</b></p>
                <p>R$ 100,00</p>
                <input type="range" min="100" max="10000" />
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
              v-for="offer in data"
              :key="offer"
            >
              <form>
                <input type="checkbox" />
              </form>
              <div class="ies-logo">
                <img :src="offer.university.logo_url" />
              </div>
              <div class="offer-data">
                <div class="offer-data-course">
                  <p><b>{{offer.course.name}}</b></p>
                  <p>{{offer.course.level}}</p>
                </div>
                <div class="offer-data-money">
                  <p>Bolsa de <b>{{offer.discount_percentage}}</b></p>
                  <p><b>R$ {{offer.price_with_discount}}</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectOffersMobile",
  data() {
    return {
      data: [
        {
          full_price: 1498.0,
          price_with_discount: 1273.3,
          discount_percentage: 15.0,
          start_date: "01/02/2020",
          enrollment_semester: "2020.1",
          enabled: false,
          course: {
            name: "Biomedicina",
            kind: "Presencial",
            level: "Bacharelado",
            shift: "Manhã",
          },
          university: {
            name: "Anhembi Morumbi",
            score: 4.2,
            logo_url: "https://www.tryimg.com/u/2019/04/16/anhembi-morumbi.png",
          },
          campus: {
            name: "Vila Olímpia",
            city: "São Paulo",
          },
        },
        {
          full_price: 1745.22,
          price_with_discount: 539.1,
          discount_percentage: 69.11,
          start_date: "01/08/2019",
          enrollment_semester: "2019.2",
          enabled: true,
          course: {
            name: "Engenharia Mecânica",
            kind: "Presencial",
            level: "Bacharelado",
            shift: "Manhã",
          },
          university: {
            name: "UNICSUL",
            score: 3.9,
            logo_url: "https://www.tryimg.com/u/2019/04/16/unicsul.png",
          },
          campus: {
            name: "Paulista",
            city: "São Paulo",
          },
        },
        {
          full_price: 428.43,
          price_with_discount: 278.48,
          discount_percentage: 35.0,
          start_date: "01/08/2019",
          enrollment_semester: "2019.2",
          enabled: true,
          course: {
            name: "Administração",
            kind: "EaD",
            level: "Bacharelado",
            shift: "Virtual",
          },
          university: {
            name: "Estácio",
            score: 4.1,
            logo_url: "https://www.tryimg.com/u/2019/04/16/estacio.png",
          },
          campus: {
            name: "Centro",
            city: "São José dos Campos",
          },
        },
        {
          full_price: 519.71,
          price_with_discount: 222.23,
          discount_percentage: 57.24,
          start_date: "01/08/2019",
          enrollment_semester: "2019.2",
          enabled: true,
          course: {
            name: "História",
            kind: "EaD",
            level: "Licenciatura",
            shift: "Virtual",
          },
          university: {
            name: "Unopar",
            score: 4.0,
            logo_url: "https://www.tryimg.com/u/2019/04/16/unopar.png",
          },
          campus: {
            name: "São José dos Campos",
            city: "São José dos Campos",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/mobile/_select_offers_mobile.scss";
</style>