<template>
  <div class="hello1">
    <h1>{{ msg }}</h1>
    <p>vue version: {{ vueVersion }}</p>
  </div>
</template>

<script>
	import Vue from 'vue';

	export default {
		name: 'HelloWorld',
		props: {
			msg: String,
		},
		data() {
			return {
				vueVersion: Vue.version
			};
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello1 {
    h1 {
      color: aqua;
    }
  }

  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
