<template>
  <section>
    <div class="p-wantspeaker">
      <div class="box"></div>
      <img src="~/assets/img/circle_02.png" class="circle_02" />
      <img src="~/assets/img/circle_03.png" class="circle_03" />
      <img src="~/assets/img/wantspeaker_bg1.png" class="wantspeaker_bg1" />
      <div class="c-container">
        <div class="l-wantspeaker_Box2">
          <h1>
            <img src="~/assets/img/circle_01.png" class="circle_01" />
            Call for paper
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
  width: 20%;
}

.p-wantspeaker {
  position: relative;
}

.l-wantspeaker_Box2 {
  background-color: #fbfbfb;
  display: inline-block;
  margin: 50px 0px 90px 0px;
  width: 100%;
  @include desktop {
    background-color: #fbfbfb00;
    padding: 80px 115px;
    max-width: 100%;
    margin: 20px 0px 270px 0px;
  }
  & h1 {
    & .circle_01 {
      position: absolute;
      top: 31px;
      z-index: -1;
      left: 10px;
      max-width: 33%;
      @include desktop {
        width: 16%;
        left: -50px;
        top: -6px;
      }
    }
    z-index: 1000;
    margin-bottom: 40px;
    @include c-heading;
  }
  & p {
    position: relative;
    font-size: 1.5rem;
    z-index: 9999;
    padding: 0px 15px 30px 15px;
    @include desktop {
      font-size: 2rem;
      padding: 0px 0px 80px 0px;
    }
  }
  & a {
    z-index: 9999;
    @include c-btn;
  }
}
.wantspeaker_bg1 {
  position: absolute;
  top: 60%;
  left: 0%;
  max-width: 80%;
  z-index: -1;
  width: 50%;
  @include desktop {
    width: 20%;
    z-index: 10;
    max-width: 100%;
  }
}

.circle_02 {
  position: absolute;
  right: 5%;
  top: 5%;
  z-index: 100;
  width: 25%;
  @include desktop {
    top: 2%;
    width: 13%;
  }
}

.circle_03 {
  width: 45%;
  position: absolute;
  right: 30%;
  bottom: 0%;
  z-index: 100;
  max-width: 80%;
  @include desktop {
    width: 20%;
    max-width: 100%;
  }
}

.box {
  position: absolute;
  right: 0%;
  z-index: 80;
  background-color: none;
  width: 130rem;
  height: 81rem;
  @include desktop {
    background-color: #fbfbfb;
  }
}
</style>

