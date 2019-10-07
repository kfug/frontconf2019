<template>
  <div >

    <session class="p-session_card" v-for="(speaker, index) in filteredSpeakers" :key="speaker" :speaker="speaker" />

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
</template>

<script>
  import { contents } from "~/contents/speakers/speakers";
  import { communities } from "json-loader!yaml-loader!~/contents/communities.yml";
  import Session from "../-Session"

  export default {
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
              if(this.$route.query.hall && this.$route.query.hall !== speaker.hall){
                  return false
              }
              if(this.$route.query.time && this.$route.query.time !== speaker.time){
                  return false
              }
              if(this.$route.params.community && speaker.tag !== this.$route.params.community){
                  return false
              }
              return true
          })

        if(this.form.tag !== null){
        }else{
          return this.speakers
        }
      },
      filteredCommunities(){
        if(this.$route.params.community !== null){
          return this.communities.filter( communities => {
            return communities.name === this.$route.params.community
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
