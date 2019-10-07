<template>
  <div v-if="speaker">
    <session class="p-session_card" :speaker="speaker" />
    <div class="p-button">
      <router-link to="/session" class="p-back">SESSION一覧に戻る</router-link>
    </div>
  </div>
</template>

<script>
import { contents } from "~/contents/speakers/speakers"
import createMeta from '~/service/meta';
import Session from "./-Session"

export default {
  layout: "page",

  data() {
    return {}
  },
    components:{
      Session
    },
  computed: {
      name(){
          return this.$route.params.id
      },
      speaker(){
          return contents.find(speaker => speaker.key === this.name)
      }

  },
  head(){
      if(this.speaker){
        const title = `${this.speaker.session.title} - FRONTEND CONFRENCE 2019`
        return {
            title,
            meta: [
              ...createMeta({
                  title,
                  image: `/images/speakers/${this.speaker.image}`,
                  tw_type: "summary"
              })
            ]
        }
      }else{
          return {}
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
