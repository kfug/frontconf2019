<template>
  <section>
    <div class="p-wantspeaker">
      <div class="box"></div>
      <img src="~/assets/img/about1.png" class="about1" alt="logo" />
      <img src="~/assets/img/about2.png" class="about2" alt="logo" />
      <img src="~/assets/img/wantspeaker_bg1.png" class="wantspeaker_bg1" alt="logo" />
      <div class="p-container">
        <div class="l-wantspeaker_Box2">
          <h1>
            <img src="~/assets/img/circle_01.png" class="circle_01" alt="logo" />Call for paper
          </h1>
          <p>
            デザイナからエンジニアまで、Webフロント製作者向けに幅広く訴求するイベントとして企画を進めており、各地域からのスピーカ公募を行っております。
            <br />
            <br />幅広い方からの登壇応募をお待ちしておりますので是非よろしくお願いいたします。
            <br />
            <br />申し込みは以下のフォームよりお願いいたします。
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeczBxHUOA8PIBWj3M-nJzzwcwyegAtjO4sUXgLXBHDUYYnng/viewform"
          >登壇申し込み</a>
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
  @include desktop {
    padding: 80px 115px;
    max-width: 100%;
    margin: 20px 0px 270px 0px;
  }
  & h1 {
    & img {
      position: relative;
      left: 120px;
      top: -25px;
      z-index: -9999;
      @include desktop {
        top: -15px;
      }
    }
    margin-bottom: 50px;
    @include c-heading;
  }
  & p {
    position: relative;
    font-size: 1.5rem;
    padding-bottom: 30px;
    z-index: 9999;
    @include desktop {
      font-size: 2rem;
      padding-bottom: 90px;
    }
  }
  & a {
    z-index: 9999;
    @include c-btn;
  }
}
.wantspeaker_bg1 {
  position: absolute;
  top: 33%;
  left: 9%;
  max-width: 80%;
  z-index: 9999;
  zoom: 0.3;
  @include desktop {
    zoom: 0.5;
    z-index: -99999999999;
    max-width: 100%;
  }
}

.about1 {
  zoom: 0.3;
  position: absolute;
  right: 10%;
  top: 5%;
  z-index: -99;
  @include desktop {
    top: 2%;
    zoom: 0.5;
  }
}

.about2 {
  zoom: 0.2;
  position: absolute;
  right: 30%;
  bottom: 0%;
  z-index: -99;
  max-width: 80%;
  @include desktop {
    zoom: 0.5;
    max-width: 100%;
  }
}

.box {
  position: absolute;
  right: 0%;
  z-index: -99999;
  background-color: #fbfbfb;
  width: 130rem;
  height: 81rem;
}
</style>

