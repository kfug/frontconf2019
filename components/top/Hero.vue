<template>
  <section>
    <div class="p-hero">
      <img src="~/assets/img/logo-white.svg" class="hero_logo" alt="frontend conference 2019" />
      <img src="~/assets/img/hero_logoBack.png" class="hero_logoBack" />
      <img src="~/assets/img/hero_leftTop.png" class="hero_leftTop" />
      <img src="~/assets/img/hero_leftBottom.png" class="hero_leftBottom" />
      <img src="~/assets/img/hero_rightTop.png" class="hero_rightTop" />
      <img src="~/assets/img/hero_rightBottom.png" class="hero_rightBottom" />
      <div class="p-container"></div>
      <h2>2019 .11 .02</h2>
      <h3>グランフロントにて開催決定!</h3>
      <div class="p-announcement">
        <p>登壇者、スポンサー募集中</p>
        <img src="~/assets/img/deco_line2.png" class="line1" />
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

.p-hero {
  color: $clr_baseText2;
  position: relative;
  text-align: center;
  font-family: Offside;
  & h2 {
    padding-top: 400px;
    font-weight: normal;
    font-size: 3.5rem;
    @include desktop {
      padding-top: 720px;
      font-size: 4rem;
    }
  }
  & h3 {
    font-weight: normal;
    font-size: 2.5rem;
    @include desktop {
      font-size: 3.5rem;
    }
  }
}

.p-announcement {
  padding-top: 25px;
  padding-bottom: 50px;
  position: relative;
  @include desktop {
    padding-top: 40px;
    padding-bottom: 110px;
  }
  & p {
    font-size: 2rem;
    @include desktop {
      font-size: 3rem;
    }
  }
  & .line1 {
    zoom: 0.5;
    text-align: center;
    max-width: 70%;
    @include desktop {
      max-width: 100%;
    }
  }
}

.hero_logo {
  width: 60%;
  min-width: 250px;
  position: absolute;
  top: 17%;
  left: 20%;
  max-width: 70%;
  z-index: 110;
  @include desktop {
    top: 16%;
    left: 36%;
    max-width: 50%;
    width: 28%;
    min-width: 320px;
    max-width: 100%;
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
.line1 {
  width: 100%;
  @include desktop {
    width: 25%;
  }
}
</style>

