<template>
  <section>
    <div class="p-wantspeaker">
      <div class="box"></div>
      <img src="~/assets/img/about1.png" class="about1" />
      <img src="~/assets/img/wantsponsor_bg1.png" class="wantspeaker_bg1" />
      <div class="p-container">
        <div class="l-wantspeaker_Box2">
          <h1>
            <img src="~/assets/img/circle_01.png" class="circle_01" />Sponsor
          </h1>
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
  width: 20%;
}

.p-wantspeaker {
  position: relative;
}

.l-wantspeaker_Box2 {
  background-color: #fbfbfb;
  display: inline-block;
  margin: 50px 0px 200px 0px;
  width: 100%;
  padding-bottom: 20px;
  @include desktop {
    background-color: #fbfbfb00;
    padding: 80px 0px 380px 0px;
    max-width: 100%;
    margin: 90px 0px 200px 0px;
  }
  & h1 {
    & img {
      position: absolute;
      left: -25px;
      top: 14px;
      left: 10px;
      z-index: -9999;
      width: 30%;
      @include desktop {
        width: 15%;
        left: -90px;
        top: -15px;
      }
    }
    margin-bottom: 50px;
    z-index: 999999;
    position: relative;
    @include c-heading;
  }
  & p {
    position: relative;
    font-size: 1.5rem;
    padding-bottom: 30px;
    z-index: 999999;
    padding: 0px 10px 30px 10px;
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
  top: 55%;
  right: 3%;
  max-width: 80%;
  z-index: -1;
  width: 70%;
  @include desktop {
    z-index: 1;
    width: 30%;
  }
}

.about1 {
  width: 10%;
  position: absolute;
  left: 20%;
  bottom: 2%;
  max-width: 40%;
  width: 30%;
  @include desktop {
    z-index: 2;
    max-width: 100%;
    width: 13%;
  }
}

.box {
  position: absolute;
  left: 0%;
  top: 4%;
  z-index: 100;
  background-color: #fbfbfb;
  width: 100%;
  height: 81rem;
  display: none;
  @include desktop {
    width: 124rem;
    display: block;
  }
}
</style>

