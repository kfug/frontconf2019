<template>
    <div class="l-floatShareButtonSpace">
        <label class="l-floatShareButtonSpace_share">SHARE</label>
        <a class="l-floatShareButtonSpace_button" href="https://twitter.com/frontkansai" target="_blank">
            <div class="l-floatShareButtonSpace_button_twitter">
                <i class="fab fa-twitter" />
            </div>
        </a>
        <a class = "l-floatShareButtonSpace_button" href="https://www.facebook.com/FRONTCONF2019/" target="_blank">
            <div class="l-floatShareButtonSpace_button_facebook">
                <i class="fab fa-facebook-f" />
            </div>
        </a>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

.l-floatShareButtonSpace {
    background: transparent linear-gradient(180deg,rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)) 0% 0% no-repeat padding-box;
    text-align: center;

    &_share {
        text-align: center;
        font-family: 'Offside';
        font-size: 22px/27px;
        letter-spacing: 2.2px;
        color: #707070;
        padding: 10px 10px;
    }

    &_button {
        display: inline-block;
        position: relative;
        vertical-align: middle;
        padding: 10px 10px;

        & i {
                color: white;
                font-size: 20px;
                display: table-cell; 
                vertical-align: middle;
            }
        .fab {
            vertical-align: middle;
        }

        &_twitter {
            width: 35px;
            height: 35px;
            background: #00ACED 0% 0% no-repeat padding-box;
            border-radius: 5px;
            display:table;
            text-align: center;
        }

        &_facebook{
            width: 35px;
            height: 35px;
            background: #305097 0% 0% no-repeat padding-box;
            border-radius: 5px;
            display:table;
            text-align: center;
        }
    }
}
</style>
