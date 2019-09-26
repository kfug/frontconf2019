<template>
    <div class="p-session">

    <div class="p-header">
        <a href="#">< TOPに戻る</a>
        <img src="~assets/img/logo_text-white.svg">
    </div>
    <div class="p-title">
        <h1>Sessions</h1>
        <p>フロントエンドのエンジニアリングや、マークアップ、デザインなど、<br> Webに関わる全ての人に是非届けたい珠玉のセッション構成でお送りしております。</p>
    </div>
    <div class="p-speaker">
        <h2>【40文字】作るだけなく、伝え語り合う会社でありたい作るだけなく、伝え語り合う会</h2>
        <p>【270文字】株式会社 chatbox は大阪の小さなWeb制作会社です。 様々なWeb制作の現場で、 「Webのこれからを語り合う」をテーマにWebの可能性を追求し続けています。 Web制作という 「作る」業務だけでなく、Webの技術を「伝える」「語り合う」会社として、 制作現場での技術 指導や、イベント・セミナーなどの交流活動にも積極的に取り組んでいます。 身の回りにありふ れたWebだからこそ、そこにしか無い、そこだけのWebの形を。 現場と、お客様と、ユーザー と、一緒に考えていくのがchatboxのWeb制作のあり方です。ああああああ</p>
        <div class="p-people">
            <p class="img"></p>
            <div class="p-introduce">
            　  <h3>田中太郎</h3>
              　<h4>所属 株式会社chatbox</h4>
              　<p>【140文字】株式会社 chatbox は大阪の小さなWeb制作会社です。 様々 なWeb制作の現場で、「Webのこれからを語り合う」をテーマにWebの 可能性を追求し続けています。 Web制作という「作る」業務だけでな く、Webの技術を「伝える」「語り合う」会社として、 制作現場。</p>
                <a href="https://twitter.com" target="_blank"><img src="~assets/img/twitter-brands-1.svg" class="p-twitter"></a>
                <a href="https://www.facebook.com" target="_blank"><img src="~assets/img/facebook-f-brands-1.svg" class="p-facebook"></a>
                <a href="#" target="_blank"><img src="~assets/img/link-solid-1.svg"></a>
            </div>
        </div>
    </div>

        <p class="p-button"><a href="#" class="p-back">TOPに戻る</a></p>

        <footer>
            <p>最新情報はこちらのサイトやTwitter公式アカウント、facebookで配信予定です。 フォローやお知らせの設定ぜひお願いいたします</p>
            <div class="link">
                <p><a href="https://twitter.com"><img src="~assets/img/twitter-brands-1.svg">twitterアカウント</a></p>
                <p><a href="https://www.facebook.com"><img src="~assets/img/facebook-f-brands-1.svg">Facebookアカウント</a></p>
            </div>
            <p><img src="~assets/img/3f20fdb.png" class="p-footer_img"></p>
            <div class="p-band">
                <p>SHARE</p>
                <a href="https://twitter.com"><img src="~assets/img/twitter-brands.svg"></a>
                <a href="https://www.facebook.com"><img src="~assets/img/facebook-f-brands.svg"></a>
            </div>
        </footer>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.p-session{
    background: #F7F7F7 0% 0% no-repeat padding-box;
}
h2, h3, h4, p{
    color: #4B4B4B;
    letter-spacing: 0;
}
.p-header{
    background: transparent linear-gradient(90deg, #1393C6 0%, #5378AA 48%, #C46A49 69%, #DD5530 100%) 0% 0% no-repeat padding-box;
    position: relative;
    height: 50px;
    margin-bottom: 83.6px;
    & img{
        margin: auto;
        padding-top: 15px;
        display: block;
        width: 270px;
    }

    & a{
        position: absolute;
        top: 11px;
        left: 21px;
        height: 27px;
        font: 18px/35px Noto Sans CJK JP;
        letter-spacing: 0.36px;
        color: #FFFFFF;
    }
}
.p-title{
    text-align: center;
    width: 780px;
    height: 180px;
    margin: 0 auto 30px;
    & h1{
        background: transparent url('~assets/img/circle_01.png') 0% 0% no-repeat padding-box;
        background-size: contain;
        font: 47px/59px Offside;
        width: 223px;
        margin: 0 auto 30px;
        padding: 23.5px 0 23.5px 54px;
        letter-spacing: 0;
        color: #707070;
    }

    & p{
        font: 16px/20px Noto Sans CJK JP;
        letter-spacing: 0;
    }
}
.p-speaker{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    width: 940px;
    height: 825px;
    margin: 0 auto 102px;
    padding: 80px;
    & h2{
        font: Bold 30px/45px Noto Sans CJK JP;
        margin-bottom: 30px;
    }
    & p{
        font: 18px/32px Noto Sans CJK JP;
        border-bottom: solid #DEDEDE 1px;
        padding-bottom: 40px;
        margin-bottom: 40px;
    }
    & p.img{
        width: 200px;
        height: 200px;
        background: #7F828B;
    }

    & .p-people{
        display: flex;
        flex-direction: row;
        & h3{
            font: Bold 22px/22px Noto Sans CJK JP;
            margin-bottom: 10px;
        }
        & h4{
            font: Medium 18px/18px Noto Sans CJK JP;
            margin-bottom: 20px;
        }
        & p{
            font: 16px/30px Noto Sans CJK JP;
            border: none;
            margin-bottom: 37.5px;
            padding: 0;
            text-align: left;
        }
        & .p-introduce{
            width: 514px;
            text-align: left;
            margin-left: 60px;
            & img{
                width: 40px;
                height: 40px;
            }
            & img.p-twitter{
                margin-right: 20px;
            }
            & img.p-facebook{
                margin-right: 28px;
            }
        }
    }
}
a.p-back{
    text-align: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #DEDEDE;
    display: inline-block;
    line-height: 60px;
    border-radius: 109px;
    width: 300px;
    height: 60px;
    margin: auto;
}
.p-button{
    text-align: center;
    margin-bottom: 150px;
}
footer{
    background: #444A64 0% 0% no-repeat padding-box;
    padding-top: 55px;
    & p{
        width: 656px;
        height: 60px;
        text-align: center;
        font: 18px/33px Noto Sans CJK JP;
        letter-spacing: 0;
        color: #FFFFFF;
        margin: 0 auto 27px;
    }
}
    .link{
        display: flex;
        justify-content: center;
        width: 580px;
        margin: 0 auto 20px;
        & a{
            display: inline-block;
            color: white;
            width: 280px;
            height: 60px;
            border: 2px solid #FFFFFF;
            border-radius: 100px;
            opacity: 1;
            margin-bottom: 50px;
        }
    }
.p-band{
    background: transparent linear-gradient(180deg, #FFFFFF99 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
}
</style>


