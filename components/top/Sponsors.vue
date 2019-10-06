<template>
  <section class="p-sponsors">
    <div class="c-container">
      <div class="p-sponsorsTitle">
        <h2 class="p-sponsorsTitle__title">Sponsors</h2>
      </div>

      <div class="p-platinums">
        <div class="p-platinums__item" v-for="item in platinums" :key="item.key">
          <div class="p-item">
            <a :href="item.url" target="_blank" rel="noopener">
              <img class="p-item__image" :src="`/images/sponsors/${item.key}.png`" :alt="item.name">
            </a>
            <router-link class="p-item__btn" v-if="item.page" :to="item.page">紹介ページ</router-link>
          </div>
        </div>
      </div>

      <div class="p-gold">
        <div class="p-gold__item" v-for="item in golds" :key="item.key">
          <div class="p-item">
            <a :href="item.url" target="_blank" rel="noopener">
              <img class="p-item__image" :src="`/images/sponsors/${item.key}.png`" :alt="item.name">
            </a>
            <router-link class="p-item__btn" v-if="item.page" :to="item.page">紹介ページ</router-link>
          </div>
        </div>
      </div>

      <div class="p-silver">
        <div class="p-silver__item" v-for="item in silvers" :key="item.key">
          <div class="p-item">
            <a :href="item.url" target="_blank" rel="noopener">
              <img class="p-item__image" :src="`/images/sponsors/${item.key}.png`" :alt="item.name">
            </a>
          </div>
        </div>
        <div class="p-silver__item"/>
        <div class="p-silver__item"/>
      </div>

      <div class="p-sponsorsTitle">
        <h2 class="p-sponsorsTitle__title">Media・Support</h2>
      </div>

      <div class="p-media">
        <div class="p-silver__item" v-for="item in medias" :key="item.key">
          <div class="p-item">
            <a :href="item.url" target="_blank" rel="noopener">
              <img class="p-item__image" :src="`/images/sponsors/${item.key}.png`" :alt="item.name">
            </a>
          </div>
        </div>
      </div>


      <!--      <div class="p-sponsors__text">-->
<!--        FRONTEND CONFERENCE 2019 では スポンサー企業様のご協賛をお待ちしております！-->
<!--        <br />-->
<!--        <br />-->
<!--        求人やサービス紹介、などスポンサー様の露出ご要望等に添えるスポンサーメニューをご用意しておりますので、ご興味の企業様は、下記のフォームよりご連絡の上、資料請求のお手続きをよろしくお願いいたします。-->
<!--        <br />-->
<!--        <br />-->
<!--      </div>-->

<!--      <div class="p-sponsors__actions">-->
<!--        <a class="p-sponsors__btn"-->
<!--           href="https://docs.google.com/forms/d/e/1FAIpQLSewyGycmlpy9pkd3Fqp3FtanZopeoY4DTjcuofvdY15BfqDaA/viewform" target="_blank"-->
<!--        >スポンサー申込み</a>-->
<!--      </div>-->

    </div>
  </section>
</template>

<script>
const {sponsors} = require("json-loader!yaml-loader!~/contents/sponsors.yml");

export default {
    data(){
        return {
            sponsors
        }
    },
    computed:{
        platinums(){
            return this.sponsors.filter(item => {
                return item.rank === "platinum"
            })
        },
        golds(){
            return this.sponsors.filter(item => {
                return item.rank === "gold"
            })
        },
        silvers(){
            return this.sponsors.filter(item => {
                return item.rank === "silver"
            })
        },
        medias(){
            return this.sponsors.filter(item => {
                return item.rank === "media"
            })
        }
    }

}

</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

.p-sponsors{
  margin-top: 150px;
  padding-bottom: 150px;
  background: $clr_readBordBg;
  overflow: hidden;
  &__text{
    text-align: left;
    @include desktop{
      margin: 0 80px ;
    }
  }
  &__actions{
    text-align: center;
  }
  &__btn{
    @include c-btn;
  }
}

.p-sponsorsTitle{
  margin: 90px 0 30px;
  text-align: center;
  &__title{
    @include c-secHeading-left;
  }
}

.p-platinums,
.p-gold,
.p-silver,
.p-media{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.p-platinums{
  &__item{
    width: 100%;
    @include desktop{
      width: 45%;
    }
  }
}

.p-gold{
  &__item{
    width: 45%;
    @include desktop{
      width: 30%;
    }
  }
}

.p-silver{
  &__item{
    width: 33%;
    @include desktop{
      width: 25%;
    }
  }
}

.p-item{
  margin: 20px 5px;
  @include desktop{
    margin: 20px;
  }
  &__image{
    width: 100%;
  }
  &__btn{
    display: block;
    width: 100%;
    @include c-btn;
    font-size: .8em;
    border-radius: 0;
    min-width: 0;
    @include desktop{
      min-width: 0;
    }
  }
}

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
    @include c-secHeading-center;

  }
  &_read {
    line-height: 2;
  }
}
</style>
