<template>
  <section>
    <div class="p-about">
      <div class="c-container">
        <div class="p-about_intro">
          <h1 class="p-about_secHeading">Access</h1>
          <p class="p-about_read">
            会場は 梅田 グランフロント北館10F カンファレンスルーム タワーB
            <br />
            グランフロント内のアクセスルートは、公式サイト上の
            <a href="https://www.kc-space.jp/accessmap/conference/" target="_blank">案内図</a>を確認してください。
            <br />
            <br />
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.9907447540236!2d135.49244401523237!3d34.70541338043328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e68e55be3c11%3A0x6d91f818ce1646c7!2z44Kw44Op44Oz44OV44Ot44Oz44OI5aSn6Ziq44K_44Ov44O8Qg!5e0!3m2!1sja!2sjp!4v1571031339384!5m2!1sja!2sjp" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          <div class="p-about_actions">
            <a class="p-about_btn" href="https://www.google.com/maps?ll=34.705413,135.494633&z=16&t=m&hl=ja&gl=JP&mapclient=embed&cid=7895364407177660103" target="_blank">GoogleMapを開く</a>
          </div>
        </div>
      </div>
    </div>
    <div class="p-about">
    </div>
  </section>
</template>

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

  background-size: 15%, 15%, 30%, 30%;
  background-position: left top, right bottom, 45% 0%, 50% 100%;
  background-repeat: no-repeat;

  @include desktop {
    margin-top: 100px;
    background-size: 15%, 15%, 15%, 18%;
  }

  &_intro {
    display: inline-block;
    margin: 50px 0;
    padding: 40px 30px;
    width: 100%;
    text-align: left;
    background: $clr_readBordBg;
    @include desktop {
      margin: 110px 0 200px;
      padding: 80px 120px;
      text-align: center;
    }
  }
  &_secHeading {
    @include c-secHeading-left;

  }
  &_read {
    line-height: 2;
  }
  &_actions {
    text-align: center;
    margin: 40px 0 0px;
  }
  &_btn {
    @include c-btn;
    //@include c-btn-pageMove-external;
  }
}
</style>
