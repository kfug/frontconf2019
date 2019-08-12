<template>
  <section>
    <div class="l-footer">
      <div class="c-container">
        <p>
          最新情報はこちらのサイトやTwitter公式アカウント、facebookで配信予定です。
          フォローやお知らせの設定ぜひお願いいたします。
        </p>
        <div class="p-buttons">
          <a href="https://twitter.com/frontkansai" class="button">
            <i class="fab fa-twitter"></i>twitterアカウント
          </a>
          <a href="https://www.facebook.com/FRONTCONF2019/" class="button">
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
  background: #444a64;
  text-align: center;
  max-width: 100%;
  & p {
    display: inline-block;
    font-size: 1.8rem;
    max-width: 655px;
    margin-top: 50px;
    margin-bottom: 53px;
  }
}

.p-buttons {
  padding-bottom: 100px;
  & .button {
    @include c-footerBtn;
  }
}
</style>

