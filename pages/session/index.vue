<template>
  <div class="p-session">
    <router-link to="/" class="p-header">
      <span class="p-header_pcLink">&lt TOPに戻る</span>
      <span to="" class="p-header_spLink">&lt</span>
      <div class="p-header_titleLogo" />
    </router-link>
    <div class="c-container">
      <div class="p-title">
        <h1>Sessions</h1>
        <p>フロントエンドのエンジニアリングや、マークアップ、デザインなど、<br> Webに関わる全ての人に是非届けたい珠玉のセッション構成でお送りしております。</p>
      </div>


      <div class="p-refine">
        <a v-for="tag in tagList" :class="tagClass(tag.key)" :key="tag.key" @click="clickTag(tag.key)">{{ tag.label }}</a>
      </div>

      <div class="p-session_bgImg1" />
      <div class="p-session_bgImg2" />

      <div class="p-session_card" v-for="(speaker, index) in filteredSpeakers" :key="index">
        <div class="p-session_information">
          <div class="p-session_halltag">ホールA</div>
          <div class="p-session_time">11:00〜</div>
          <div class="p-session_tag">Nuxt.js</div>
        </div>
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

      <div v-if="filteredCommunities.length > 0">
        <div class="p-title">
          <h1>JoinCommunity</h1>
        </div>

        <div class="p-session_card" v-for="(community, index) in filteredCommunities" :key="index">
          <div class="p-speaker">
            <div class="p-speaker_img" :style="`background-image: url(/images/communities/${community.image})`" />
            <div class="p-speaker_info">
              　    <div class="p-speaker_name">{{ community.name }}</div>
              <p class="p-speaker_detail" v-html="checkNewLineChar(community.detail)" />
              <a class="p-btn"
                 href="https://docs.google.com/forms/d/e/1FAIpQLSewyGycmlpy9pkd3Fqp3FtanZopeoY4DTjcuofvdY15BfqDaA/viewform" target="_blank"
              >Join!</a>
            </div>
          </div>
        </div>
      </div>

      <div class="p-button">
        <router-link to="/" class="p-back">TOPに戻る</router-link>
      </div>
    </div>



    <l-footer :marginImg="false" />
    <l-share-footer />
  </div>
</template>

<script>
  import LFooter from "~/components/Footer.vue";
  import LShareFooter from "~/components/top/ShareFooter.vue";
  import { contents } from "~/contents/speakers/speakers";
  import { communities } from "json-loader!yaml-loader!~/contents/communities.yml";
  export default {
    components: {
      LFooter,
      LShareFooter
    },
    data() {
      return {
        speakers: contents,
        communities,
        form:{
          tag: null
        },
        tagList:[
          {
            label: "v-kansai",
            key: "vkansai"
          },
          {
            label: "関西フロントエンドUG",
            key: "kfug"
          },
        ]
      }
    },
    computed:{
      filteredSpeakers(){
        if(this.form.tag !== null){
          return this.speakers.filter( speaker => {
            return speaker.tags && speaker.tags.indexOf(this.form.tag) !== -1
          })
        }else{
          return this.speakers
        }
      },
      filteredCommunities(){
        if(this.form.tag !== null){
          return this.communities.filter( communities => {
            return communities.key === this.form.tag
          })
        }else{
          return []
        }
      },
    },
    methods: {
      checkNewLineChar(text) {
        return text.replace(/\n/gm, "<br>");
      },
      clickTag(e){
        if(e === this.form.tag){
          this.form.tag = null
        }else{
          this.form.tag = e
        }
      },
      tagClass(e){
        return {
          "p-refine_tag" : true,
          "active": this.form.tag === e
        }
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
  }
  h2, h3, h4, p{
    color: #4B4B4B;
    letter-spacing: 0;
  }
  .p-header {
    background: transparent linear-gradient(90deg, #1393C6 0, #5378AA 48%, #C46A49 69%, #DD5530 100%) 0 0 no-repeat padding-box;
    position: relative;
    display: block;
    height: 50px;
    margin-bottom: 20px;
    @include desktop() {
      margin-bottom: 60px;
    }
    &_titleLogo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 270px;
      height: 20px;
      background: url("~assets/img/logo_text-white.svg") 0 0 no-repeat;
    }
    & span {
      position: absolute;
      top: 50%;
      left: 21px;
      transform: translateY(-50%);
      letter-spacing: 0.36px;
      color: #FFFFFF;
      text-decoration: none;
    }
    &_pcLink {
      display: none;
      @include desktop() {
        display: inline-block;
      }
    }
    &_spLink {
      display: inline-block;
      @include desktop() {
        display: none;
      }
    }
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
        padding: 38px 80px 80px 80px;
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
    &_information{
      display: flex;
      font-family: Offside;
      font-size:1.8rem;
      margin-bottom:19px;
      position: relative;
    }
    &_halltag{
      display:inline-block;
      background-color:#F29A8B;
      color:#FFFFFF;
      padding:3px 12px;
    }
    &_time{
      font-size:1.5rem;
      padding-left:10px;
      padding-top:5px;
      @include desktop() {
        font-size:1.8rem;
        padding-left:20px;
        padding-top:5px;
      }
    }
    &_tag{
      background-color: #F7F7F7;
      border-radius: 5px;
      padding:3px 12px;
      position:absolute;
      top:0%;
      right:0%;
    }
  }
  .p-speaker {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    @include desktop() {
      flex-wrap: nowrap;
      text-align: left;
    }
    &_img {
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
  .p-refine {
    width: 100%;
    background-color: white;
    margin-bottom: 35px;
    padding: 19px 30px;
    position: relative;
    z-index: 2;
    &_tag {
      display: inline-block;
      padding: 5px 20px;
      border-radius: 25px;
      text-decoration: none;
      color: #636363;
      background-color: #EAE9EA;
      margin-right: 15px;
      font-size: 1.3rem;
      margin-bottom: 8px;
      @include desktop() {
        font-size:1.8rem;
      }
    }
  }
  .active{
    color: #fff !important;
    background-color: #419BF9;
  }
  .p-btn {
    @include c-btn;
  }
</style>
