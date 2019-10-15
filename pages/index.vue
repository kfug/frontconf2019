<template>
  <main>
    <p-hero></p-hero>
    <p-ticket></p-ticket>
    <p-about></p-about>
    <p-sessions></p-sessions>
    <p-access></p-access>
    <p-sponsors></p-sponsors>
    <p-staff></p-staff>
    <L-footer></L-footer>
    <l-share-footer></l-share-footer>
  </main>
</template>

<script>
import PHero from "~/components/top/Hero.vue";
import PTicket from "~/components/top/Ticket.vue";
import PAbout from "~/components/top/About.vue";
import PSponsors from "~/components/top/Sponsors.vue";
import PStaff from "~/components/top/Staff.vue";
import PSessions from "~/components/top/Sessions.vue";
import PAccess from "~/components/top/Access.vue";
import LFooter from "~/components/Footer.vue";
import LShareFooter from "~/components/top/ShareFooter.vue";

export default {
  components: {
    PHero,
    PTicket,
    PAbout,
    PSessions,
    PSponsors,
    PStaff,
    PAccess,
    LFooter,
    LShareFooter
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";


</style>

