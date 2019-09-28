<template>
  <router-link to="/" class="p-header">
    <span class="p-header_pcLink">&lt TOPに戻る</span>
    <span to="" class="p-header_spLink">&lt</span>
    <div class="p-header_titleLogo" />
  </router-link>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";
.p-header {
  background: transparent linear-gradient(90deg, #1393C6 0, #5378AA 48%, #C46A49 69%, #DD5530 100%) 0 0 no-repeat padding-box;
  position: relative;
  display: block;
  height: 50px;
  
  &_titleLogo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 270px;
    height: 20px;
    background: url("~assets/img/logo_text-white.svg") 0 0 no-repeat;
  }
  & span {
    position: absolute;
    top: 50%;
    left: 21px;
    transform: translateY(-50%);
    letter-spacing: 0.36px;
    color: #FFFFFF;
    text-decoration: none;
  }
  &_pcLink {
    display: none;
    @include desktop() {
      display: inline-block;
    }
  }
  &_spLink {
    display: inline-block;
    @include desktop() {
      display: none;
    }
  }
}

</style>

