<template>
  <section>
    <div class="p-about">
      <img src="~/assets/img/dec_frame01.png" class="img1" />
      <img src="~/assets/img/dec_frame01.png" class="img2" />
      <img src="~/assets/img/about1.png" class="about1" />
      <img src="~/assets/img/about2.png" class="about2" />
      <div class="p-container">
        <div class="l-aboutBox">
          <h1>About Frontend Conference 2019</h1>
          <p>
            2016 , 2017 , 2018年とたくさんの人に来場頂いた
            <br />関西最大級のフロントエンド製作者向けイベント FRONTEND CONFERENCE が
            今年も開催されます！
            <br />
            <br />例年通り、 デザイナもエンジニアも、職種問わず
            <br />Webに携わるすべての人が楽しめるイベントとして
            <br />様々なセッション・企画等を検討中です！
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

.p-about {
  position: relative;
}
.img1 {
  width: 70%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 50;
  @include desktop {
    width: 20%;
  }
}
.img2 {
  width: 70%;
  transform: scale(-1, -1);
  filter: FlipH FlipV;
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: 50;
  @include desktop {
    width: 20%;
  }
}

.about1 {
  width: 20%;
  position: absolute;
  right: 40%;
  top: 2%;
  z-index: 100;
}

.about2 {
  width: 20%;
  position: absolute;
  left: 5%;
  bottom: 0%;
  z-index: 80;
  max-width: 80%;
  @include desktop {
    max-width: 100%;
  }
}

.l-aboutBox {
  display: inline-block;
  background: #fafafa;
  padding: 40px 30px;
  margin: 50px 0px 90px 0px;
  text-align: center;
  position: relative;
  z-index: 10000000;
  @include desktop {
    padding: 80px 115px;
    max-width: 100%;
    margin: 90px 0px 200px 0px;
  }
  & h1 {
    color: $clr_baseText2;
    margin-bottom: 25px;
    font-size: 3rem;
    font-family: Offside;
    font-weight: normal;
    @include desktop {
      margin-bottom: 60px;
      font-size: 4rem;
    }
  }
  & p {
    font-size: 1.5rem;
    color: $clr_baseText1;
    @include desktop {
      font-size: 2rem;
    }
  }
}
</style>
