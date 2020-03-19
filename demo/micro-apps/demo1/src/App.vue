<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <h2 style="margin:40px 0 10px;font-size:24px;">从父组件传递来的数据</h2>
    {{JSON.stringify(dataFromPortal)}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      dataFromPortal:null
    }
  },
  mounted(){
    this.dataFromPortal = this.$getMicro()
    console.log(this.dataFromPortal)
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
