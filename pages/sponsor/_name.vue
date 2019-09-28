<template>
    <main>
        <p-header></p-header>
        <div class="p-sponsors">
            <div class="p-sponsors_back">
                <div class="c-container">
                    <div class="p-sponsors_contents">
                        <h1 class="p-sponsors_secHeading">Sponsors</h1>
                        <p class="p-sponsors_info">FRONTEND CONFERENCE 2019へご協賛いただいた個人・企業様のご紹介です。</p>
                        <div class="p-sponsors_card">
                            <div class="p-sponsors_card_contents">
                                <div class="p-sponsors_card_contents_img">
                                    <img :src="sponsor.img" :alt="sponsor.name">
                                </div>
                                <p class="p-sponsors_card_contents_name">{{this.sponsor.name}}</p>
                                <div class="p-sponsors_card_contents_main" v-html="sponsor.html"></div> 
                                <a class="p-sponsors_card_contents_btn" :href="sponsor.sponsorUrl" target="_blank" rel="noopener noreferrer">企業ページを見る</a>
                            </div>
                        </div>
                    </div>
                </div>
                <nuxt-link class="p-sponsors_top_btn" to="/">TOPに戻る</nuxt-link>
            </div>
        </div>
        <L-footer></L-footer>
        <l-share-footer></l-share-footer>
    </main>
</template>

<script>
import PHeader from "~/components/Header.vue";
import LFooter from "~/components/FooterWithoutMargin.vue";
import LShareFooter from "~/components/top/ShareFooter.vue";
import SponsorData from "~/static/sponsors.json"

export default {
    components: {
        PHeader,
        LFooter,
        LShareFooter
    },
    computed: {
        sponsor() {
            return SponsorData.items.find(sponsor => sponsor.name === this.$route.params.name);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

.c-container {
    padding-bottom: 50px;
    @include desktop {
        max-width: 980px;
        padding-bottom: 100px;
    }
}
.p-sponsors {
  text-align: center;
  background: $clr_readBordBg;
  @include desktop {
    background: linear-gradient(90deg, $clr_readBordBg 0%, $clr_readBordBg 100%, white 50%, white 100%);
  }
  &_info {
    font-family:"Noto Sans CJK JP";
    letter-spacing: 0;
  }

  &_back {
    background: $clr_readBordBg;
    @include desktop {
      position:relative;
      background: transparent;
      background-image: 
        url("~assets/img/sponsor_bg1.png"),
        url("~assets/img/sponsor_bg2.png");
      background-repeat: no-repeat;
      background-size: 20%, 20%;
      background-position: 10% 25%, 92% 72%;
      padding-bottom: 100px;
    }
  }

  &_card {
      background: #FFFFFF;  
      width: 100%;
      display: block;
      text-align: center;
      &_contents {
          display: inline-block;
          text-align: center;
          padding-bottom: 20px;
          width: 100%;
          @include desktop {
            width: 780px;
            padding-bottom: 40px;
          }
          &_img {
            img {
                width: 100%;
                height: 100%;
            }
            margin-bottom: 10px;
            @include desktop {
                margin-top: 80px;
                width: 100%;
                height: 550px;
                margin-bottom: 20px;
            }
          }
          &_name {
              text-align: left;
              font-family:"Noto Sans CJK JP";
              font-weight: bold;
              color: #4B4B4B;
              font-size: 3.5rem;
          }
          &_main {
              text-align: left;
              padding-bottom: 80px;
              overflow-wrap:break-word;
              &_h1 /deep/ {
                font-family:"Noto Sans CJK JP";
                font-weight: bold;
                font-size: 2.4rem;
                color: #4B4B4B;
              }
              &_p /deep/ {
                font-family:"Noto Sans CJK JP";
                font-size: 1.8rem;
                color: #4B4B4B;;
              }
          }
          &_btn {
              @include c-btn;
              @include c-btn-pageMove-external;
          }
      }
  }
  
  &_secHeading {
    @include c-secHeading-left;
    margin-top:50px;
  }

  &_top_btn {
    display: inline-block;
    border-radius: 9999px;
    border: 2px solid #DEDEDE;
    margin-bottom: 20px;
    padding: 10px 20px;
    min-width: 220px;
    max-width: 100%;
    text-decoration: none;
    text-align: center;
    font-size: 1.8rem;
    color: #636363;
    position: relative;
    background: #FFFFFF;
    opacity: 1;
    transition: all .3s ease;

    &:hover {
        opacity: .5;
        transition: all .3s ease;
    }

    @include desktop {
        min-width: 280px;
        font-size: 2rem;
        letter-spacing: .1em;
    }
  }
}
</style>