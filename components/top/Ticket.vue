<template>
  <section>
    <div class="p-ticket">
      <div class="c-container">
        <div class="p-ticket__container">
          <h1 class="p-ticket__heading">
            Ticket
          </h1>
          <p class="p-ticket__description">
            <span v-if="soldOut">
              ありがとうございました
            </span>
            <span v-else>
              チケット販売<br class="p-sp" />
              開始しました！
            </span>
          </p>
          <a
            class="p-ticket__btn"
            href="#" target="_blank"
          >
            <span v-if="soldOut">
              完売しました
            </span>
            <span v-else>
              チケット購入！
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Ticket.vue",
    data() {
      return {
        soldOut: true
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_library.scss";

.p-ticket {
  width: 100%;
  text-align: center;
  background-image: url("~assets/img/fc2019Web_tikets_test.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  @include desktop {
    background-size: contain;
  }
}
.p-ticket__container {
  height: 400px;
  @include desktop {
    height: calc(100px + 10vw * 2.5);
  }
}
.p-ticket__heading {
  @include c-secHeading-left;
  margin: 80px auto 40px;
  @include desktop {
    margin: 50px auto calc(10vw * 0.9 - 70px);
  }
}
.p-ticket__description {
  margin-bottom: 30px;
  @include desktop {
    margin-bottom: calc(10vw * 0.7 - 60px);
  }
}
.p-ticket__btn {
  position: relative;
  @include c-btn;
  &::after {
    content: "\f35d";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
}
.p-sp {
  @include desktop {
    display: none;
  }
}
</style>