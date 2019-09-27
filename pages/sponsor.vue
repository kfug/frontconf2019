<template>
  <main>
    <p-hero></p-hero>
    <p-about></p-about>
    <p-wantsponsor></p-wantsponsor>
    <p-sessions></p-sessions>
    <p-sponsors></p-sponsors>
    <L-footer></L-footer>
    <l-share-footer></l-share-footer>
  </main>
</template>

<script>
import PHero from "~/components/top/Hero.vue";
import PAbout from "~/components/top/About.vue";
import PWantsponsor from "~/components/top/Wantsponsor.vue";
import PSessions from "~/components/top/Sessions.vue";
import PSponsors from "~/components/top/Sponsors.vue";
import LFooter from "~/components/Footer.vue";
import LShareFooter from "~/components/top/ShareFooter.vue";

export default {
  components: {
    PHero,
    PAbout,
    PWantsponsor,
    PSessions,
    PSponsors,
    LFooter,
    LShareFooter
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";
</style>

