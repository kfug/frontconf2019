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
      <!--<img src="~/assets/img/hero_leftTop.png" class="hero_leftTop" />-->
      <!--<img src="~/assets/img/hero_leftBottom.png" class="hero_leftBottom" />-->
      <!--<img src="~/assets/img/hero_rightTop.png" class="hero_rightTop" />-->
      <!--<img src="~/assets/img/hero_rightBottom.png" class="hero_rightBottom" />-->
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";
.p-hero {
  color: $clr_textLarge;
  position: relative;
  text-align: center;

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
      min-width: 400px;
    }

    &Logo {
      display: inline-block;
      margin: 13% 13% 16%;
    }
  }

  &_info {
    @include desktop {
      padding-top: 20px;
      padding-bottom: 100px;
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
      margin-bottom: 50px;
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

.hero_logoBack {
  width: 93%;
  position: absolute;
  top: 11%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 93%;
  z-index: 100;
  @include desktop {
    top: 11%;
    max-width: 50%;
    width: 38%;
    max-width: 100%;
  }
}

.hero_leftTop {
  display: none;
  position: absolute;
  top: 10%;
  left: 12%;
  max-width: 50%;
  z-index: 90;
  @include desktop {
    top: 8%;
    display: block;
    max-width: 100%;
  }
}

.hero_leftBottom {
  display: none;
  position: absolute;
  top: 43%;
  left: 11%;
  max-width: 50%;
  z-index: 90;
  @include desktop {
    top: 41%;
    display: block;
    max-width: 100%;
  }
}
.hero_rightTop {
  display: none;
  position: absolute;
  top: 11%;
  right: 9%;
  max-width: 50%;
  z-index: 90;
  @include desktop {
    top: 9%;
    display: block;
    max-width: 100%;
  }
}
.hero_rightBottom {
  display: none;
  position: absolute;
  top: 43%;
  right: 17%;
  max-width: 50%;
  z-index: 90;
  @include desktop {
    top: 41%;
    display: block;
    max-width: 100%;
  }
}
</style>

