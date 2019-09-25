<template>
  <section>
    <div class="p-sessions">
      <div class="p-sessions_back">
        <div class="c-container">
          <div class="p-sessions_content">
            <h1 class="p-sessions_secHeading">Sessions</h1>
            <!-- TODO: PDF -->
            <p class="p-sessions_read">
              フロントエンドのエンジニアリングや、マークアップ、デザインなど、
              Webに関わる全ての人に是非届けたい珠玉のセッション構成でお送りしております
            </p>
            <!-- TODO: セッション一覧ページへのリンク貼り替え -->
            <a class="p-sessions_btn" href=".">セッション一覧</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

.p-sessions {
  margin: 50px auto 0;
  position: relative;
  background-image:
    url("~assets/img/sessions_bg1.png"),
    url("~assets/img/sessions_bg2.png");

  background-size: 30%, 30%;
  background-position: left top, right bottom;
  background-repeat: no-repeat;

  @include desktop {
    margin-top: 100px;
    background-size: 25%, 25%;
  }

  &_content {
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
    margin-bottom: 3em;
  }

  &_btn {
    @include c-btn;
  }
}
</style>
