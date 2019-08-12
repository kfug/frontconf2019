<template>
  <section>
    <div class="p-wantSpeaker">
      <div class="p-wantSpeaker_back">
        <div class="c-container">
          <div class="p-wantSpeaker_content">
            <h1 class="p-wantSpeaker_secHeading">
              Call for paper
            </h1>
            <p class="p-wantSpeaker_read">
              デザイナからエンジニアまで、Webフロント製作者向けに幅広く訴求するイベントとして企画を進めており、各地域からのスピーカ公募を行っております。
              <br />幅広い方からの登壇応募をお待ちしておりますので是非よろしくお願いいたします。
              <br />申し込みは以下のフォームよりお願いいたします。
            </p>
            <a class="p-wantSpeaker_btn"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeczBxHUOA8PIBWj3M-nJzzwcwyegAtjO4sUXgLXBHDUYYnng/viewform" target="_blank"
            >登壇申し込み</a>
          </div>
        </div>
      </div>
      <div class="box"></div>
      <!--<img src="~assets/img/circle_02.png" class="circle_02" />-->
      <!--<img src="~assets/img/circle_03.png" class="circle_03" />-->
      <div class="c-container">
        <div class="l-wantspeaker_Box2">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

.p-wantSpeaker {
  background: linear-gradient(90deg, white 0%, white 50%, $clr_readBordBg 50%, $clr_readBordBg 100%);

  &_back {
    background-image: url("~assets/img/wantspeaker_bg1.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 15vw;//調整途中

  }


  &_content {
    margin-left: 20%;
    padding: $padding_readBordSP;

    background: $clr_readBordBg;
    @include desktop {
      padding: $padding_readBordPC;
    }

  }

  &_secHeading {
    @include c-secHeading-left;
  }

  &_read {
    /*line-height: 2;*/
  }

  &_btn {
    @include c-btn;
  }
}


</style>

