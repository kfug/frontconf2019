<template>
  <section>
    <div class="p-about">
      <div class="c-container">
        <div class="p-about_intro">
          <h1 class="p-about_secHeading">About Frontend Conference 2019</h1>
          <p class="p-about_reed">
            2016 , 2017 , 2018年とたくさんの人に来場頂いた
            関西最大級のフロントエンド製作者向けイベント FRONTEND CONFERENCE が今年も開催されます！
            <br />
            例年通り、 デザイナもエンジニアも、職種問わず
            Webに携わるすべての人が楽しめるイベントとして
            様々なセッション・企画等を検討中です！
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
  margin: 50px auto 0;
  position: relative;
  background-image:
          url("~assets/img/about_frame01.png"),
          url("~assets/img/about_frame02.png"),
          url("~assets/img/circle_02.png"),
          url("~assets/img/circle_03.png");

  background-size: 15%, 15%, 15%, 18%;
  background-position: left top, right bottom, 45% 0%, 50% 100%;
  background-repeat: no-repeat;

  @include desktop {
    margin-top: 100px;
  }

  &_intro {
    display: inline-block;
    margin: 50px 0;
    padding: 40px 30px;
    width: 100%;
    text-align: left;
    background: $clr_textBordBg;
    @include desktop {
      margin: 110px 0 200px;
      padding: 80px 120px;
      text-align: center;
    }
  }
  &_secHeading {
    @include c-secHeading-center;
  }
  &_reed {
    line-height: 2;
  }
}
</style>
