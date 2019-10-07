<template>
  <section>
    <div class="p-about">
      <div class="c-container">
        <div class="p-about_intro">
          <h1 class="p-about_secHeading">Sessions</h1>
          <p class="p-about_read">
            FRONTEND CONFERENCE 2019 セッション一覧公開中！
            <br />
            昨年同様、幅広いテーマの登壇内容を集めた珠玉のセッション構成で、
            デザイナもエンジニアも、職種問わずWebに携わるすべての人が楽しめる内容となっています。
            <br />
          </p>
          <iframe width="100%" height="480px" src="https://drive.google.com/a/chatbox-inc.com/file/d/1C9rtaDjQEeTO7EamhQHroP3PdX-CtpQK/preview" frameborder="0"></iframe>
          
          <div class="p-about_actions">
            <nuxt-link class="p-about_btn" to="/session">SESSION 一覧</nuxt-link>
          </div>
        </div>
      </div>
      <div class="c-container">
        <div class="p-about_intro">
          <h1 class="p-about_secHeading">Handson</h1>
          <p class="p-about_read">
            セッションだけじゃない、ハンズオン企画も！
            <br />
            フロントエンド技術を用いた Web制作をテーマにした ハンズオン企画を検討中！
            今どきのフロントエンド制作フローを体験したいかたは是非ご参加ください。
            <br />
            ハンズオンのコンテンツは近日公開です！
          </p>
<!--          <div class="p-about_actions">-->
<!--            <nuxt-link class="p-about_btn" to="/session">ハンズオン 一覧</nuxt-link>-->
<!--          </div>-->
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
