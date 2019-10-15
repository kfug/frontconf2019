<template>
  <div class="">
    <div class="p-session_information">
      <span :class="`p-session_halltag--${speaker.hall.split('-')[0]}`" :to="`/session?hall=${speaker.hall}`">{{speaker.hall}}</span>
      <span class="p-session_time" :to="`/session?time=${speaker.time}`">{{speaker.time}} 〜</span>
      <router-link v-if="speaker.tag" class="p-session_tag" :to="`/group/${speaker.tagkey}`">{{speaker.tag}}</router-link>
    </div>
    <h2 class="p-session_title">
      <router-link :to="`/session/${speaker.key}`" class="p-session_titleIcon">
        #
      </router-link>
      {{ speaker.session.title }}
    </h2>
    <p class="p-session_detail" v-html="checkNewLineChar(speaker.session.detail)"/>

    <div class="p-speaker">
      <div class="p-speaker_img" :style="`background-image: url(/images/speakers/${speaker.image})`"/>
      <div class="p-speaker_info">
        <div class="p-speaker_name">{{ speaker.name }}</div>
        <div class="p-speaker_company" v-if="speaker.company">{{ speaker.company }}</div>
        <p class="p-speaker_detail" v-html="checkNewLineChar(speaker.detail)"/>
        <a v-if="speaker.twitter" :href="speaker.twitter" target="_blank">
          <span class="p-speaker_icon p-twitter"/>
        </a>
        <a v-if="speaker.facebook" :href="speaker.facebook" target="_blank">
          <span class="p-speaker_icon p-facebook"/>
        </a>
        <a v-if="speaker.link" :href="speaker.link" target="_blank">
          <span class="p-speaker_icon p-linkIcon"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    import LFooter from "~/components/Footer.vue";
    import LShareFooter from "~/components/top/ShareFooter.vue";
    import {contents} from "~/contents/speakers/speakers";
    import {communities} from "json-loader!yaml-loader!~/contents/communities.yml";

    export default {
        props: {
            speaker: {
                type: Object,
                required: true
            }
        },
        components: {
            LFooter,
            LShareFooter
        },
        data() {
            return {}
        },
        computed: {
        },
        methods: {
            checkNewLineChar(text) {
                return text.replace(/\n/gm, "<br>");
            },
            clickTag(e) {
                if (e === this.form.tag) {
                    this.form.tag = null
                } else {
                    this.form.tag = e
                }
            },
            tagClass(e) {
                return {
                    "p-refine_tag": true,
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

  h2, h3, h4, p {
    color: #4B4B4B;
    letter-spacing: 0;
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
      position: relative;
      padding-left: 1em;
      @include desktop() {
        padding-left: 0em;
        margin-bottom: 30px;
      }
    }
    &_titleIcon {
      position: absolute;
      top: 1px;
      left: 0em;
      width: 1em;
      height: 1em;
      font-size: 1em;
      display: inline-block;
      color: #808080;
      font-weight: bold;
      line-height: 1em;
      @include desktop{
        left: -1em;
      }
    }

    &_detail {
      border-bottom: solid #DEDEDE 1px;
      padding-bottom: 40px;
      margin-bottom: 30px;
      font-size: .8em;
      line-height: 1.5em;
      @include desktop() {
        margin-bottom: 40px;
      }
    }

    &_information {
      display: flex;
      font-family: Offside;
      font-size: 1.8rem;
      margin-bottom: 19px;
      position: relative;
    }

    &_halltag--A {
      display: inline-block;
      background-color: #F29A8B;
      border-radius: 5px;
      color: #FFFFFF;
      padding: 3px 12px;
    }
    &_halltag--B {
      display: inline-block;
      background-color: #64B297;
      border-radius: 5px;
      color: #FFFFFF;
      padding: 3px 12px;
    }
    &_halltag--C {
      display: inline-block;
      background-color: #56B6DB;
      border-radius: 5px;
      color: #FFFFFF;
      padding: 3px 12px;
    }

    &_time {
      font-size: 1.5rem;
      padding-left: 10px;
      padding-top: 5px;
      color: inherit;
      @include desktop() {
        font-size: 1.8rem;
        padding-left: 20px;
        padding-top: 5px;
      }
    }

    &_tag {
      background-color: #F7F7F7;
      border-radius: 5px;
      padding: 3px 12px;
      position: absolute;
      top: 0%;
      right: 0%;
      color: inherit;
      text-decoration: none;
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

  .p-button {
    text-align: center;
    margin-bottom: 150px;
  }

  .p-back {
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
        font-size: 1.8rem;
      }
    }
  }

  .active {
    color: #fff !important;
    background-color: #419BF9;
  }

  .p-btn {
    @include c-btn;
  }
</style>
