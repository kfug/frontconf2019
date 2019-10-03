<template>
  <div class="p-session" v-if="speaker">
    <div class="c-container">
      <div class="p-title">
        <h1>Sessions</h1>
        <p>フロントエンドのエンジニアリングや、マークアップ、デザインなど、<br> Webに関わる全ての人に是非届けたい珠玉のセッション構成でお送りしております。</p>
      </div>
      <div class="p-session_bgImg1" />
      <div class="p-session_bgImg2" />
      <div v-if="speaker" class="p-session_card">
        <h2 class="p-session_title">{{ speaker.session.title }}</h2>
        <p class="p-session_detail" v-html="checkNewLineChar(speaker.session.detail)" />
        <div class="p-speaker">
          <div class="p-speaker_img" :style="`background-image: url(/images/speakers/${speaker.image})`" />
          <div class="p-speaker_info">
            　    <div class="p-speaker_name">{{ speaker.name }}</div>
            　  <div class="p-speaker_company" v-if="speaker.company">所属 {{ speaker.company }}</div>
            <p class="p-speaker_detail" v-html="checkNewLineChar(speaker.detail)" />
            <a v-if="speaker.twitter" :href="speaker.twitter" target="_blank">
              <span class="p-speaker_icon p-twitter" />
            </a>
            <a v-if="speaker.facebook" :href="speaker.facebook" target="_blank">
              <span class="p-speaker_icon p-facebook" />
            </a>
            <a v-if="speaker.link" :href="speaker.link" target="_blank">
              <span class="p-speaker_icon p-linkIcon" />
            </a>
          </div>
        </div>
      </div>
      <div class="p-button">
        <router-link to="/session" class="p-back">SESSION一覧に戻る</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { contents } from "~/contents/speakers/speakers"

export default {
  layout: "page",
  data() {
    return {}
  },
  computed: {
      name(){
          return this.$route.params.id
      },
      speaker(){
          return contents.find(speaker => speaker.key === this.name)
      }

  },
  mounted() {
    if (!this.speaker) {
      this.$router.push("/session");
      return
    }
  },
  methods: {
    checkNewLineChar(text) {
      return text.replace(/\n/gm, "<br>");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

.p-session {
  background: #F7F7F7 0 0 no-repeat padding-box;
  position: relative;
  overflow: hidden auto;
  padding-top: 50px;
}

h2, h3, h4, p{
  color: #4B4B4B;
  letter-spacing: 0;
}


.p-title {
  text-align: center;
  margin: 0 auto 30px;
  & h1 {
    background: transparent url('~assets/img/circle_01.png') 0 0 no-repeat padding-box;
    background-size: 60px 60px;
    font: 24px/30px Offside;
    width: 114px;
    padding: 15px 0 15px 30px;
    margin: 0 auto 20px;
    letter-spacing: 0;
    color: #707070;
    @include desktop() {
      font: 47px/59px Offside;
      width: 223px;
      background-size: contain;
      padding: 23.5px 0 23.5px 54px;
      margin: 0 auto 30px;
    }
  }
  & p {
    letter-spacing: 0;
  }
}

.p-session_bgImg1 {
  display: none;
  @include desktop() {
    position: absolute;
    display: block;
    top: 357px;
    left: 5%;
    width: 293px;
    height: 231px;
    background: transparent url('~assets/img/sessions_bg1.png') 0 0 no-repeat padding-box;
  }
}
.p-session_bgImg2 {
  display: none;
  @include desktop() {
    position: absolute;
    display: block;
    top: 709px;
    right: 5%;
    width: 275px;
    height: 253px;
    background: transparent url('~assets/img/sessions_bg2.png') 0 0 no-repeat padding-box;
  }
}

.p-session {
  &_card {
    position: relative;
    background: #FFFFFF 0 0 no-repeat padding-box;
    width: auto;
    max-width: 940px;
    margin: 0 auto 50px;
    padding: 20px 20px;
    z-index: 2;
    @include desktop() {
      max-width: 940px;
      margin: 0 auto 50px;
      padding: 80px;
    }
  }
  &_title {
    margin-bottom: 20px;
    @include desktop() {
      margin-bottom: 30px;
    }
  }
  &_detail {
    border-bottom: solid #DEDEDE 1px;
    padding-bottom: 40px;
    margin-bottom: 30px;
    @include desktop() {
      margin-bottom: 40px;
    }
  }
}

.p-speaker {
  display: block;
  text-align: center;
  @include desktop() {
    display: flex;
    text-align: left;
  }
  &_img {
    display: inline-block;
    min-width: 150px;
    height: 150px;
    background: no-repeat;
    background-size: contain;
    margin: 0 auto 20px;
    @include desktop() {
      min-width: 200px;
      height: 200px;
      margin: 0 60px 0 0;
    }
  }
  &_name {
    margin-bottom: 15px;
    @include desktop() {
      margin-bottom: 10px;
    }
  }
  &_company {
    margin-bottom: 20px;
  }
  &_detail {
    margin-bottom: 30px;
    text-align: left;
    @include desktop() {
    }
  }
  &_icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-size: contain;
    background: no-repeat center;
  }
}

.p-twitter {
  background-image: url("~assets/img/twitter-brands-1.svg");
  margin-right: 35px;
  @include desktop() {
    margin-right: 20px;
  }
  &:hover {
    background-image: url("~assets/img/twitter-brands-2.svg");
  }
}
.p-facebook {
  background-image: url("~assets/img/facebook-f-brands-1.svg");
  margin-right: 35px;
  @include desktop() {
    margin-right: 20px;
  }
  &:hover {
    background-image: url("~assets/img/facebook-f-brands-2.svg");
  }
}
.p-linkIcon {
  background-image: url("~assets/img/link-solid-1.svg");
  &:hover {
    background-image: url("~assets/img/link-solid-2.svg");
  }
}

.p-button{
  text-align: center;
  margin-bottom: 150px;
}
.p-back{
  color: $clr_textLarge;
  border-radius: 109px;
  text-decoration: none;
  text-align: center;
  background: #FFFFFF 0 0 no-repeat padding-box;
  border: 2px solid #DEDEDE;
  display: inline-block;
  line-height: 60px;
  width: 300px;
  height: 60px;
}
</style>
