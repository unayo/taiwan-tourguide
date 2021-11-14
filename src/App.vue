<template>
  <router-link to='/'>
    <div
    :class="look === true ? 'bgBanner' : ''"
    class="position-relative">
    <div
      :class="look === true ? 'fontHome' : 'fontOther'"
      class="font">
      <img
        :class="look === true ? 'logo' : 'logoOther'"
        alt="logo" src="@/assets/logo.svg">
      <img
        :class="look === true ? 'taiwan' : 'd-none'"
        alt="font taiwan" src="@/assets/images/font-taiwan.svg">
    </div>
      <div
      :class="look === true ? 'atHome' : 'atOther'"
      class="orangeCircle rounded-circle bg-primary"></div>
    </div>
  </router-link>
  <router-view/>
</template>

<style lang="scss">
@import "assets/main.scss";

.bgBanner {
  height: 100vh;
  overflow: hidden;
}
.orangeCircle {
  position: absolute;
  z-index: 1;
}
.atHome {
  top: 50%;
  left: -58%;
  height: 110vw;
  width: 110vw;
  transform: translateY(-50%);
  transition: .4s;
}
.atOther {
  top: -62px;
  left: -71px;
  height: 249px;
  width: 249px;
  transform: none;
  transition: .4s;
}
.font {
  position: absolute;
  z-index: 2;
  .logo {
    display: block;
    height: 20vw;
    max-height: 46vw;
    margin-bottom: 5rem;
  }
  .logoOther {
    height: 90px;
  }
  .taiwan {
    height: 12vw;
    max-height: 29vw;
  }
}
.fontHome {
    top: 65px;
    left: 65px;
}
.fontOther {
  top: 39px;
  left: 28px;
}
</style>

<script>
export default {
  computed: {
    look () {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
