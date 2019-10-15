<template>
  <div class="p-session">
    <div class="c-container">
      <div class="p-title">
        <h1>Handson</h1>
        <p>
          今どきのフロントエンド制作技術を手を動かしながら学べるハンズオン<br>
          気になっていたあの技術を、今すぐ学べるチャンス！
        </p>
      </div>

      <div class="p-session_bgImg1" />
      <div class="p-session_bgImg2" />

      <nuxt/>
    </div>
  </div>
</template>

<script>
  export default {
    layout: "page",
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/_library.scss";

  .p-session {
    background: #F7F7F7 0 0 no-repeat padding-box;
    position: relative;
    overflow: hidden auto;
    padding-top: 50px;
  }

  h2, h3, h4, p{
    color: #4B4B4B;
    letter-spacing: 0;
  }


  .p-title {
    text-align: center;
    margin: 0 auto 30px;
    & h1 {
      @include c-secHeading-left;
    }
    & p {
      letter-spacing: 0;
    }
  }
  .p-session_bgImg1 {
    display: none;
    @include desktop() {
      position: absolute;
      display: block;
      top: 357px;
      left: 5%;
      width: 293px;
      height: 231px;
      background: transparent url('~assets/img/sessions_bg1.png') 0 0 no-repeat padding-box;
    }
  }
  .p-session_bgImg2 {
    display: none;
    @include desktop() {
      position: absolute;
      display: block;
      top: 709px;
      right: 5%;
      width: 275px;
      height: 253px;
      background: transparent url('~assets/img/sessions_bg2.png') 0 0 no-repeat padding-box;
    }
  }
  .p-session {
    &_card {
      position: relative;
      background: #FFFFFF 0 0 no-repeat padding-box;
      width: auto;
      max-width: 940px;
      margin: 0 auto 50px;
      padding: 20px 20px;
      z-index: 2;
      @include desktop() {
        max-width: 940px;
        margin: 0 auto 50px;
        padding: 38px 80px 80px 80px;
      }
    }
    &_title {
      margin-bottom: 20px;
      @include desktop() {
        margin-bottom: 30px;
      }
    }
  }
  .p-button{
    text-align: center;
    margin-bottom: 150px;
  }
  .p-back{
    color: $clr_textLarge;
    border-radius: 109px;
    text-decoration: none;
    text-align: center;
    background: #FFFFFF 0 0 no-repeat padding-box;
    border: 2px solid #DEDEDE;
    display: inline-block;
    line-height: 60px;
    width: 300px;
    height: 60px;
  }
  .p-refine {
    width: 100%;
    background-color: white;
    margin-bottom: 35px;
    padding: 19px 30px;
    position: relative;
    z-index: 2;
    &_tag {
      display: inline-block;
      padding: 5px 20px;
      border-radius: 25px;
      text-decoration: none;
      color: #636363;
      background-color: #EAE9EA;
      margin-right: 15px;
      font-size: 1.3rem;
      margin-bottom: 8px;
      @include desktop() {
        font-size:1.8rem;
      }
    }
  }
  .active{
    color: #fff !important;
    background-color: #419BF9;
  }
  .p-btn {
    @include c-btn;
  }
  .p-button{
    text-align: center;
    margin-bottom: 150px;
  }
  .p-back{
    color: $clr_textLarge;
    border-radius: 109px;
    text-decoration: none;
    text-align: center;
    background: #FFFFFF 0 0 no-repeat padding-box;
    border: 2px solid #DEDEDE;
    display: inline-block;
    line-height: 60px;
    width: 300px;
    height: 60px;
  }
</style>
