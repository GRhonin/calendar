<template>
  <div class="content">
    <SideBar />
    <router-view />
  </div>
</template>
<script>
import SideBar from "../components/SideBar.vue";
export default {
  name: "home",
  components: {
    SideBar,
  },
  data() {
    return {
      msg: "首页",
    };
  },
};
</script>
<style vars lang="scss" scoped>
@import "../assets/common.scss";
.content {
  display: flex;
}
</style>