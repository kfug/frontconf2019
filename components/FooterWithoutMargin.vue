<template>
  <section>
    <div class="l-footer">
      <div class="l-footer_contents">
        <div class="c-container">
          <p class="l-footer_intro">
            最新情報はこちらのサイトやTwitter公式アカウント、facebookで配信予定です。<br>
            フォローやお知らせの設定ぜひお願いいたします。
          </p>
          <div class="l-footer_media">
            <a class="l-footer_mediaBtn" href="https://twitter.com/frontkansai" target="_blank">
              <i class="fab fa-twitter"></i>twitterアカウント
            </a>
            <a class="l-footer_mediaBtn" href="https://www.facebook.com/FRONTCONF2019/" target="_blank">
              <i class="fab fa-facebook-f"></i>facebookアカウント
            </a>
          </div>
          <img class="l-footer_kfugLogo" src="~assets/img/kfuglogo-type2.png" alt="Kansai Front-end Users Group">
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
  &_margin {
    padding: 20px 0 10px;
    text-align: center;
    &Img {
      max-width: 250px;
      width: 30%;

      @include desktop {
        padding: 50px 0 20px;
        width: 50vw;
      }

    }
  }

  &_contents {
    padding: 60px 0 80px;
    color: white;
    text-align: center;
    background: $clr_navy;
  }

  &_intro {
    margin-bottom: 1.5em;
    display: inline-block;
    font-size: 1.8rem;
  }

  &_media {
    margin-bottom: 50px;
  }
  &_mediaBtn  {
    display: inline-block;
    border: solid 2px white;
    border-radius: 9999px;
    margin: 10px;
    padding: 10px 30px;
    min-width: 250px;
    text-decoration: none;
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
    position: relative;
    background: transparent;
    opacity: 1;
    transition: all .3s ease;

    &:hover {
      opacity: .5;
      transition: all .3s ease;
    }

    & i {
      color: white;
      margin-right: 15px;
    }


    @include desktop {
      min-width: 280px;
      font-size: 1.6rem;
    }
  }
  &_kfugLogo {
    max-width: 200px;
  }

}

</style>

