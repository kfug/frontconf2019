<template>
  <div class="p-staff">
    <div class="c-container">
      <div class="p-staff__intro">
        <h1 class="p-staff__heading">Staff</h1>
        <div class="p-staff__container">
          <div v-for="(staff, index) in staffs" :key="index" class="p-staff__member">
            <a
              :href="staff.url ? staff.url : false"
              class="p-staff__member--link"
              target="_blank"
            >
              <span
                :style="{ 'background-image' : 'url(/images/staffs/' + staff.img + ')' }"
                class="p-staff__member--img"
              ></span>
              <span class="p-staff__member--name">{{ staff.name }}</span>
            </a>
          </div>
        </div>
      </div>
      <div class="p-staff__intro" v-if="false">
        <h1 class="p-staff__heading">Designer</h1>
        <div class="p-staff__container">
          <div v-for="(designer, index) in designers" :key="index" class="p-staff__member">
            <a
              :href="designer.url ? designer.url : false"
              class="p-staff__member--link"
              target="_blank"
            >
              <span
                :style="{ 'background-image' : 'url(' + designer.img + ')' }"
                class="p-staff__member--img"
              ></span>
              <span class="p-staff__member--name">{{ designer.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const {staffs, designers} = require("json-loader!yaml-loader!~/contents/staffs.yml");

export default {
  name: "Staff.vue",
  data(){
    return {
      staffs,
      designers
    }
  },
  computed: {}
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
.p-staff__member--link {
  color: #000;
  text-decoration: none;
}
.p-staff__member--img {
  display: block;
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
