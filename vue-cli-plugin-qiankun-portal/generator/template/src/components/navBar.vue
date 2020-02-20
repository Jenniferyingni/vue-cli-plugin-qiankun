<template>
  <div class="nav-bar">
    <div class="menu">
      <img class="logo" src="@/assets/logo.png">
    </div>
    <div class="menu" @click="goto('vue app1', '/demo1')">
      菜单1
    </div>
    <div class="menu" @click="goto('vue app1', '/demo2')">
      菜单2
    </div>
  </div>
</template>

<script>
export default {
  name:'navBar',
  methods: {
    goto(title, href) {
      window.history.pushState({}, title, href);
    }
	}
}
</script>

<style lang="less" scoped>
.nav-bar{
  height: 64px;
  line-height: 64px;
  background: #394959;
  .logo{
    width:40px;
    height:auto;
  }
  .menu{
    float: left;
    line-height: 44px;
    height: 44px;
    margin: 8px 22px;
    color:#fff;
    cursor: pointer;
  }
}
</style>