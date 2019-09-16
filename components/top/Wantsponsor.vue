<template>
  <section>
    <div class="p-wantSponsor">
      <div class="p-wantSponsor_back">
        <div class="c-container">
          <div class="p-wantSponsor_content">
            <h1 class="p-wantSponsor_secHeading">
              Want Sponsor
            </h1>
            <p class="p-wantSponsor_read">
              FRONTEND CONFERENCE 2019 では スポンサー企業様のご協賛をお待ちしております！
              <br />求人やサービス紹介、などスポンサー様の露出ご要望等に添えるスポンサーメニューをご用意しておりますので、ご興味の企業様は、下記のフォームよりご連絡の上、資料請求のお手続きをよろしくお願いいたします。
            </p>
            <a class="p-wantSponsor_btn"
               href="https://docs.google.com/forms/d/e/1FAIpQLSewyGycmlpy9pkd3Fqp3FtanZopeoY4DTjcuofvdY15BfqDaA/viewform" target="_blank"
            >スポンサー申込み<i class="fas fa-external-link-alt"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

.p-wantSponsor {
  padding-top: 150px;
  background-image: url("~assets/img/wantsponsor_bg1.png");
  background-repeat: no-repeat;
  background-size: 38vw;
  background-position: 80% 0;

  @include desktop {
    margin-top: 100px;
    padding-top: 0;
    background: linear-gradient(90deg, $clr_readBordBg 0%, $clr_readBordBg 50%, white 50%, white 100%);
  }


  &_back {
    background: $clr_readBordBg;

    @include desktop {
      background: transparent;
      background-image: url("~assets/img/wantsponsor_bg1.png");
      background-repeat: no-repeat;
      background-size: 25vw;
      background-position: calc( 100% / 2 + 35vw) 50%;
    }


  }


  &_content {
    margin-left: 0;
    padding: $padding_readBordSP;

    background: $clr_readBordBg;
    @include desktop {
      margin-right: 20%;
      padding: $padding_readBordPC;
    }

  }

  &_secHeading {
    @include c-secHeading-left;
  }

  &_read {
    margin-bottom: 3em;
  }

  &_btn {
    @include c-btn;

    i {
      position: absolute;
      right: 5%;
      top:20%;
    }
  }
}
  
</style>

