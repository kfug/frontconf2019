<template>
  <section>
    <div class="p-hero">
      <img src="~/assets/img/hero_logoBack.png" class="hero_logoBack" alt="logo" />
      <img src="~/assets/img/hero_leftTop.png" class="hero_leftTop" alt="logo" />
      <img src="~/assets/img/hero_leftBottom.png" class="hero_leftBottom" alt="logo" />
      <img src="~/assets/img/hero_rightTop.png" class="hero_rightTop" alt="logo" />
      <img src="~/assets/img/hero_rightBottom.png" class="hero_rightBottom" alt="logo" />
      <!-- <img src="~/assets/img/logo-white.svg" class="App-logo1" alt="logo" /> -->
      <div class="p-container"></div>
      <h2>2019 .11 .03</h2>
      <h3>グランフロントにて開催決定!</h3>
      <div class="p-announcement">
        <p>登壇者、スポンサー募集中</p>
        <img src="~/assets/img/deco_line2.png" class="line1" alt="logo" />
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

.p-hero {
  color: $clr_baseText2;
  position: relative;
  text-align: center;
  font-family: Offside;
  & h2 {
    padding-top: 670px;
    font-weight: normal;
    font-size: 3.5rem;
    @include desktop {
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

// .App-logo1 {
//   max-width: 450px;
//   text-align: center;
//   position: absolute;
//   top:o;
//   _z-index: 2;
// }

.hero_logoBack {
  position: absolute;
  top: 15%;
  left: 32%;
  max-width: 50%;
  z-index: 9999;
  @include desktop {
    max-width: 100%;
  }
}

.hero_leftTop {
  position: absolute;
  top: 10%;
  left: 12%;
  max-width: 50%;
  z-index: -9999;
  @include desktop {
    max-width: 100%;
  }
}

.hero_leftBottom {
  position: absolute;
  top: 43%;
  left: 11%;
  max-width: 50%;
  z-index: -9999;
  @include desktop {
    max-width: 100%;
  }
}
.hero_rightTop {
  position: absolute;
  top: 11%;
  right: 9%;
  max-width: 50%;
  z-index: -9999;
  @include desktop {
    max-width: 100%;
  }
}
.hero_rightBottom {
  position: absolute;
  top: 43%;
  right: 17%;
  max-width: 50%;
  z-index: -9999;
  @include desktop {
    max-width: 100%;
  }
}
</style>

