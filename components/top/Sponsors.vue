<template>
  <section>
    <div class="p-sponsors">
      <div class="p-sponsors_back">
        <div class="c-container">
          <div class="p-sponsors_contents">
            <h1 class="p-sponsors_secHeading">Sponsors</h1>
            <div class="p-sponsors_diamond">
              <div class="p-sponsors_diamond_list">
                <div class="p-sponsors_diamond_list_item" :key=index v-for="(sponsorData, index) in this.diamondSponsorDataList" >
                  <sponsor-item 
                    :sponsor-data="sponsorData">
                  </sponsor-item>
                </div>
              </div>
            </div>
            <div class="p-sponsors_gold">
              <div class="p-sponsors_gold_list">
                <div class="p-sponsors_gold_list_item" :key=index v-for="(sponsorData, index) in this.goldSponsorDataList">
                  <sponsor-item  
                    :sponsor-data="sponsorData">
                  </sponsor-item>
                </div>
              </div>
            </div>
            <div class="p-sponsors_silver">
              <div class="p-sponsors_silver_list">
                <div class="p-sponsors_silver_list_item" :key=index v-for="(sponsorData, index) in this.silverSponsorDataList" >
                  <sponsor-item 
                    :sponsor-data="sponsorData">
                  </sponsor-item>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SponsorItem from "./SponsorItem"
import SponsorData from "~/static/sponsors.json"

export default {
  components:{
    SponsorItem
  },
  computed: {
    diamondSponsorDataList(){
      return SponsorData.items.filter(el => el.rank === "diamond")
    },
    goldSponsorDataList(){
      return SponsorData.items.filter(el => el.rank === "gold")
    },
    silverSponsorDataList(){
      return SponsorData.items.filter(el => el.rank === "silver")
    }
  }
}
</script> 

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

.c-container {
  max-width: 700px;
}
.p-sponsors {
  text-align: center;
  padding-top: 60px;

  @include desktop {
    padding-top: 100px;
    background: linear-gradient(90deg, $clr_readBordBg 0%, $clr_readBordBg 100%, white 50%, white 100%);
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
    }
  }
  
  &_diamond {
    text-align: center;
    &_list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &_item {
        @include desktop {
          margin: 0 20px 30px;
          width: calc((100% - 80px)/ 2);
        }
      }
    }
    
  }

  &_gold {
    &_list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &_item {
        width: calc((100% - 80px)/ 2);
        @include desktop {
          margin: 0 20px 30px;
          width: calc((100% - 120px)/ 3);
        }
      }
    }
  }

  &_silver {
    &_list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &_item {
        width: calc((100% - 135px)/ 2);
        @include desktop {
          margin: 0 20px 30px;
          width: calc((100% - 160px)/ 4);
        }
      }
    }
  }
  &_secHeading {
    @include c-secHeading-left;
  }
}
</style>
