<template>
  <section>
    <div class="l-footer">
      <div class="p-container">
        <p>
          最新情報はこちらのサイトやTwitter公式アカウント、facebookで配信予定です。
          フォローやお知らせの設定ぜひお願いいたします。
        </p>
        <div class="p-buttons">
          <a href="https://twitter.com/frontkansai" class="button">
            <i class="fab fa-twitter"></i>twitterアカウント
          </a>
          <a href="https://www.facebook.com/frontconf2018" class="button">
            <i class="fab fa-facebook-f"></i>facebookアカウント
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

.l-footer {
  color: white;
  background: $clr_footer;
  text-align: center;
  max-width: 100%;
  & p {
    display: inline-block;
    font-size: 1.8rem;
    max-width: 655px;
    margin-bottom: 53px;
    margin-top: 50px;
  }
}

.p-buttons {
  padding-bottom: 100px;
  & .button {
    @include c-footerBtn;
  }
}
</style>

