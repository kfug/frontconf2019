<template>
  <div>
    <session class="p-session_card" v-for="(speaker, index) in filteredSpeakers" :key="speaker.name" :speaker="speaker" />

    <div class="p-button">
      <router-link to="/" class="p-back">TOPに戻る</router-link>
    </div>
  </div>
</template>

<script>
  import { contents } from "~/contents/speakers/speakers";
  import { communities } from "json-loader!yaml-loader!~/contents/communities.yml";
  import Session from "./-Session"
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
              if(this.form.tag && speaker.tag !== this.form.tag){
                  return false
              }
              return true
          })
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
