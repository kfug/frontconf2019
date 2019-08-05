<template>
  <section>
    <div class="p-wantspeaker">
      <div class="box"></div>
      <img src="~/assets/img/about1.png" class="about1" alt="logo" />
      <img src="~/assets/img/wantsponsor_bg1.png" class="wantspeaker_bg1" alt="logo" />
      <div class="p-container">
        <div class="l-wantspeaker_Box2">
          <h1>Sponsor</h1>
          <p>
            FRONTEND CONFERENCE 2019 では
            <br />スポンサー企業様のご協賛をお待ちしております！
            <br />
            <br />求人やサービス紹介、などスポンサー様の露出ご要望等に添えるスポン
            <br />サーメニューをご用意しておりますので、ご興味の企業様は、下記のフ
            <br />ォームよりご連絡の上、資料請求のお手続きをよろしくお願いいたします。
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSewyGycmlpy9pkd3Fqp3FtanZopeoY4DTjcuofvdY15BfqDaA/viewform"
          >スポンサー申込み</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

img {
  zoom: 0.5;
}

.p-wantspeaker {
  position: relative;
}

.l-wantspeaker_Box2 {
  // background-color: #fbfbfb;
  display: inline-block;
  margin: 50px 0px 90px 0px;
  width: 100%;
  padding-bottom: 200px;
  @include desktop {
    padding: 80px 0px 380px 0px;
    max-width: 100%;
    margin: 90px 0px 200px 0px;
  }
  & h1 {
    margin-bottom: 50px;
    z-index: 999999;
    @include c-heading;
  }
  & p {
    position: relative;
    font-size: 1.5rem;
    padding-bottom: 30px;
    z-index: 999999;
    @include desktop {
      font-size: 2rem;
      padding-bottom: 90px;
    }
  }
  & a {
    z-index: 99999;
    @include c-btn;
  }
}

.wantspeaker_bg1 {
  position: absolute;
  top: 33%;
  right: 3%;
  max-width: 80%;
  z-index: 999;
  @include desktop {
    z-index: -999999999;
    max-width: 100%;
  }
}

.about1 {
  zoom: 0.5;
  position: absolute;
  left: 20%;
  bottom: 2%;
  max-width: 40%;
  @include desktop {
    z-index: -9999999;
    max-width: 100%;
  }
}

.box {
  position: absolute;
  left: 0%;
  top: 4%;
  z-index: -99999;
  background-color: #fbfbfb;
  width: 100%;
  height: 81rem;
  @include desktop {
    width: 124rem;
  }
}
</style>

