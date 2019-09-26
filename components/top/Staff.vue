<template>
  <div class="p-staff">
    <div class="c-container">
      <div class="p-staff__intro">
        <h1 class="p-staff__heading">Staff</h1>
        <div class="p-staff__container">
          <div class="p-staff__member">
            <a class="p-staff__member--img" href="#"></a>
            <span class="p-staff__member--name">鈴木一郎</span>
          </div>
          <div>
            <a class="p-staff__member--img" href="#"></a>
            <span class="p-staff__member--name">鈴木一郎</span>
          </div>
          <div>
            <a class="p-staff__member--img" href="#"></a>
            <span class="p-staff__member--name">鈴木一郎</span>
          </div>
          <div>
            <a class="p-staff__member--img" href="#"></a>
            <span class="p-staff__member--name">鈴木一郎</span>
          </div>
          <div>
            <a class="p-staff__member--img" href="#"></a>
            <span class="p-staff__member--name">鈴木一郎</span>
          </div>
          <div>
            <a class="p-staff__member--img" href="#"></a>
            <span class="p-staff__member--name">鈴木一郎</span>
          </div>
          <div>
            <a class="p-staff__member--img" href="#"></a>
            <span class="p-staff__member--name">鈴木一郎</span>
          </div>
        </div>
      </div>
      <div class="p-staff__intro">
        <h1 class="p-staff__heading">Designer</h1>
        <div class="p-staff__container">
          <div class="p-staff__member">
            <a class="p-staff__member--img" href="#"></a>
            <span class="p-staff__member--name">鈴木一郎</span>
          </div>
          <div class="p-staff__member">
            <a class="p-staff__member--img" href="#"></a>
            <span class="p-staff__member--name">鈴木一郎</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Staff.vue"
  }
</script>

<style lang="scss" scoped>
@import "~assets/scss/_library.scss";

.p-staff {

}
.p-staff__intro {
  text-align: center;
  &:first-child {
    padding-top: 100px;
  }
  &:last-child {
    padding-bottom: 100px;
  }
}
.p-staff__heading {
  @include c-secHeading-left;
  margin-bottom: 100px;
  text-align: center;
}
.p-staff__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  @include desktop {
    grid-template-columns: repeat(5, 1fr);
  }
}
.p-staff__member {

}
.p-staff__member--img {
  display: block;
  background-image: url('~assets/img/ST001.png');
  background-size: contain;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  border-radius: 1000px;
  @include desktop {
    width: 120px;
    height: 120px;
  }
}
.p-staff__member--name {
  display: block;
  margin-bottom: 85px;
}
</style>