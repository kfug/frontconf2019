<template>
  <main>
    <p-hero></p-hero>
    <p-about></p-about>
    <p-wantspeaker></p-wantspeaker>
    <p-wantsponsor></p-wantsponsor>
    <L-footer></L-footer>
  </main>
</template>

<script>
import PHero from "~/components/top/Hero.vue";
import PAbout from "~/components/top/About.vue";
import PWantspeaker from "~/components/top/Wantspeaker.vue";
import PWantsponsor from "~/components/top/Wantsponsor.vue";
import LFooter from "~/components/Footer.vue";

export default {
  components: {
    PHero,
    PAbout,
    PWantspeaker,
    PWantsponsor,
    LFooter
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

</style>

