<template>
  <main>
    <div class="l-contentWrap">
      <p-hero></p-hero>
      <p-about></p-about>
      <p-wantspeaker></p-wantspeaker>
      <p-wantsponsor></p-wantsponsor>
      <L-footer></L-footer>
    </div>
    <l-sticky-footer class="l-float"></l-sticky-footer>
  </main>
</template>

<script>
import PHero from "~/components/top/Hero.vue";
import PAbout from "~/components/top/About.vue";
import PWantspeaker from "~/components/top/Wantspeaker.vue";
import PWantsponsor from "~/components/top/Wantsponsor.vue";
import LFooter from "~/components/Footer.vue";
import LStickyFooter from "~/components/top/StickyFooter.vue";

export default {
  components: {
    PHero,
    PAbout,
    PWantspeaker,
    PWantsponsor,
    LFooter,
    LStickyFooter
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

  .l-contentWrap {
    background: white;
  }
  .l-float {
      z-index: 99;
      position: sticky;
      bottom: 0;
    }
</style>

