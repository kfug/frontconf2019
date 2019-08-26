<template>
    <article class="l-shareFooter">
        <span class="l-shareFooter_label">SHARE</span>
        <a class="l-shareFooter_btnTwitter" href="https://twitter.com/intent/tweet?text=FRONTEND CONFERENCE 2019｜関西フロントエンドUG https://2019.kfug.jp/&amp;hashtags=frontkansai" target="_blank">
            <i class="fab fa-twitter" />
        </a>
        <a class = "l-shareFooter_btnFacebook" href="https://www.facebook.com/sharer.php?u=https://2019.kfug.jp/&amp;t=FRONTEND CONFERENCE 2019｜関西フロントエンドUG https://2018.kfug.jp/&amp;hashtags=frontkansai" target="_blank">
            <i class="fab fa-facebook-f" />
        </a>
    </article>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~assets/scss/_library.scss";

.l-shareFooter {
    display: block;
    width: 100%;
    text-align: center;
    background: transparent linear-gradient(180deg,rgba(255, 255, 255, .6), rgba(255, 255, 255, 1)) 0% 0% no-repeat padding-box;
    position: fixed;
    bottom: 0;
    z-index: 1000;

    &_label {
        display: inline-block;
        padding: 10px 10px 15px;
        font-size: 1.6rem;
        font-family: 'Offside';
        letter-spacing: 2.2px;
        color: $clr_textDefault;

        @include desktop {
            padding: 10px 10px;
        }
    }

    @mixin p-shareBtn{
        display: inline-block;
        width: 35px;
        height: 35px;
        color: white;
        border-radius: 5px;
        text-align: center;
        text-decoration: none;
        transition: all .3s ease;


        &:hover {
            opacity: .5;
            transition: all .3s ease;
        }


        & i {
            display: inline-block;
            font-size: 2rem;
            line-height: 36px;
        }

    }

    & &_btnTwitter {
        @include p-shareBtn;
        margin-right: 10px;
        background: #1DA1F2;
    }

    & &_btnFacebook {
        @include p-shareBtn;
        background: #3C5A99;
    }
}
</style>
