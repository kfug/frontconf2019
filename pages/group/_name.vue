<template>
  <div class="p-session" v-if="community">
    <div class="c-container">
      <div class="p-title">
        <h1>Community</h1>
        <p>
          関西でイベントを開催しているコミュニティの紹介です。<br>
          FRONTEND CONFERENCE 2019 で興味のあるコミュニティを見つけ、イベントに参加してみましょう！
        </p>
      </div>

<!--      <div class="p-session_bgImg1" />-->
<!--      <div class="p-session_bgImg2" />-->

      <div class="p-session_card">
        <div class="p-speaker">
          <div class="p-speaker_img" :style="`background-image: url(/images/communities/${community.image})`"/>
          <div class="p-speaker_info">
            <div class="p-speaker_name">{{ community.name }}</div>
            <p class="p-speaker_detail" v-html="checkNewLineChar(community.detail)"/>
          </div>
        </div>
        <div class="text-center mt-5">
          <a class="p-btn" tabindex=""
             :href="community.link" target="_blank"
          >Connpass</a>
        </div>
      </div>

      <div class="p-title">
        <h1>Talks</h1>
        <p>
          FRONTNEND CONFERENCE 2019 で聞ける、コミュニティの技術テーマにまつわるおすすめセッションです。 <br>
          気になる登壇者はタイムテーブルで、登壇時間をチェック！
        </p>
      </div>

      <session class="p-session_card" v-for="(speaker, index) in filteredSpeakers" :key="speaker.name" :speaker="speaker" />

      <div class="p-button">
        <router-link to="/session" class="p-back">SESSION 一覧へ</router-link>
      </div>
      <div class="p-button">
        <router-link to="/" class="p-back">TOP ページへ</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { contents } from "~/contents/speakers/speakers";
  import { communities } from "json-loader!yaml-loader!~/contents/communities.yml";
  import Session from "../session/-Session"

  export default {
    layout: "page",
    components: {
      Session,
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
      community(){
          return this.communities.find(com => {
              return com.key === this.$route.params.name
          })
      },
      filteredSpeakers(){
          return this.speakers.sort((a,b) => {
              if(a.time > b.time){
                  return 1
              }else if(a.time < b.time){
                  return -1
              }else{
                  if(a.hall > b.hall){
                      return 1
                  }else if(a.hall < b.hall){
                      return -1
                  }else{
                      return 0
                  }
              }
          }).filter( speaker => {
              if(speaker.tagkey !== this.community.key){
                  console.log(speaker.tag)
                  return false
              }
              return true
          })
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
      @include c-secHeading-left;
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
      margin-bottom: 5px;
      font-size: .8em;
    }

    &_detail {
      margin-bottom: 30px;
      text-align: left;
      font-size: .8em;
      line-height: 1.5em;
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

  .p-btn {
    @include c-btn;
  }


</style>
