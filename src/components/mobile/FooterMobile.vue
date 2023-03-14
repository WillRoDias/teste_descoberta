<template>
  <div class="footer-main">
    <div class="buttons">
      <div class="first-button">
        <button class="first">
        <p class="primary"><b>0800 123 2222</b></p>
        <p class="secondary">Segunda a sexta de 8h às 22h</p>
      </button>
      </div>
     <div class="center-buttons">
       <button class="second">
        <p class="primary"><b>Chat</b></p>
      </button>
      <button class="third">
        <p class="primary"><b>E-mail</b></p>
      </button>
      <button class="fourth">
        <p class="primary"><b>Ajuda</b></p>
      </button>
     </div>
      <div class="last-button">
        <button class="fiveth">
        <p class="secondary">Feito com amor pela Quero Educação</p>
      </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMobile",
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/mobile/footer-mobile.scss";
</style>