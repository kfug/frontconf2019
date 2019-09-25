<template>
    <div class="p-sponsors_item">
        <a href="sponsorData.sponsorUrl" target="_blank" rel="noopener noreferrer">
            <img class="p-sponsors_item_img" :src="sponsorData.img" :alt="sponsorData.name">
        </a>
        <a class="p-sponsors_item_btn" :href='/sponsor/' + sponsorData.name>紹介ページ</a>
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
        display: inline-block;
        margin-bottom: 20px;
        text-decoration: none;
        text-align: center;
        font-size: 1.4rem;
        font-weight: bold;
        color: white;
        position: relative;
        background: $clr_bgGradation;
        opacity: 1;
        transition: all .3s ease;

        &:hover {
            opacity: .5;
            transition: all .3s ease;
        }

        @include desktop {
            font-size: 1.8rem;
            letter-spacing: .1em;
        }
    }
}

</style>
