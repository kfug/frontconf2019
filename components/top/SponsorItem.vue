<template>
    <div class="p-sponsors_item">
        <a :href= "sponsorData.url" target="_blank" rel="noopener noreferrer">
            <img class="p-sponsors_item_img" :src="sponsorData.img" :alt="sponsorData.name">
        </a>
        <nuxt-link class="p-sponsors_item_btn" :to="this.getSponsorDetailPath(sponsorData.name)">紹介ページ</nuxt-link>
        <!-- <a class="p-sponsors_item_btn" :href=sponsorData.name>紹介ページ</a> -->
    </div>
</template>

<script>
export default {
    name: "SponsorItem",
    props:{
        sponsorData:{
            type: Object,
            required: true
        }
    },
    methods: {
        getSponsorDetailPath(name) {
            return "/sponsor/" + name;
        }   
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";
.p-sponsors_item {
    margin: 0 20px 30px;
    display: inline-grid;
    width: 100%;

    &_img {
        max-width: 100%;
    }
    &_btn{
        @include c-btn-pageMove-internal;
        display: inline-block;
        padding:10px 20px;
        margin-bottom: 20px;
        text-decoration: none;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        color: white;
        position: relative;
        background: $clr_bgGradation;
        opacity: 1;
        transition: all .3s ease;
        height: 40px;
        
        &:hover {
            opacity: .5;
            transition: all .3s ease;
        }

        @include desktop {
            padding:5px 20px;
            font-size: 1.4rem;
            letter-spacing: .1em;
        }
    }
}

</style>
