<template>
  <main>
    <p-hero></p-hero>
    <p-about></p-about>
    <p-wantsponsor></p-wantsponsor>
    <p-sponsors></p-sponsors>
    <p-staff></p-staff>
    <L-footer></L-footer>
    <l-share-footer></l-share-footer>
  </main>
</template>

<script>
import PHero from "~/components/top/Hero.vue";
import PAbout from "~/components/top/About.vue";
import PSponsors from "~/components/top/Sponsors.vue";
import PWantsponsor from "~/components/top/Wantsponsor.vue";
import PStaff from "~/components/top/Staff.vue";
import LFooter from "~/components/Footer.vue";
import LShareFooter from "~/components/top/ShareFooter.vue";

export default {
  components: {
    PHero,
    PAbout,
    PWantsponsor,
    PSponsors,
    PStaff,
    LFooter,
    LShareFooter
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";


</style>

