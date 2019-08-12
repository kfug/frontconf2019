<template>
  <section>
    <div class="p-hero">
      <div class="p-hero_title">
        <img class="p-hero_titleLogo" src="~assets/img/hero_logo-white.svg" alt="Frontend Conference 2019"/>
      </div>
      <div class="p-hero_info">
        <div class="c-container">
          <h2 class="p-hero_infoDate">2019 .11 .02</h2>
          <h3 class="p-hero_infoPlace">グランフロントにて開催決定！</h3>
          <p class="p-hero_infoWant">
            登壇者、スポンサー募集中
            <span class="line"></span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

.p-hero {
  display: block;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 50px;
  max-width: 1300px;
  color: $clr_textLarge;
  position: relative;
  text-align: center;

  background-image:
  url("~assets/img/hero_leftTop.png"),
  url("~assets/img/hero_leftBottom.png"),
  url("~assets/img/hero_rightTop.png"),
  url("~assets/img/hero_rightBottom.png");

  background-position: left top, left bottom, right top, right bottom;
  background-size: 26%;
  background-repeat: no-repeat;

  @include desktop {
    padding-top: 0;
    padding-bottom: 0;
  }

  &_title {
    box-sizing: border-box;
    margin: 0 auto;
    min-width: 320px;
    width: 38vw;
    max-width: 650px;
    background-image: url("~assets/img/hero_logoBack.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @include desktop {
      min-width: 600px;
    }

    &Logo {
      display: inline-block;
      margin: 13% 13% 16%;
    }
  }

  &_info {
    @include desktop {
      padding-top: 10px;
      padding-bottom: 60px;
    }
    &Date {
      font-family: Offside;
      font-size: 2rem;
      font-weight: normal;
      @include desktop {
        font-size: 4rem;
      }
    }
    &Place {
      margin-bottom: 40px;
      font-size: 2rem;
      font-weight: normal;
      @include desktop {
        font-size: 3.5rem;
      }
    }

    &Want {
      display: inline-block;
      font-size: 2rem;
      font-weight: normal;
      line-height: 1;
      @include desktop {
        font-size: 3rem;
      }

      & .line {
        display: inline-block;
        border-radius: 9999px;
        width: 100%;
        height: 10px;
        background-image: url("~assets/img/hero_line.png");
        background-size: cover;
      }
    }
  }

}
</style>

