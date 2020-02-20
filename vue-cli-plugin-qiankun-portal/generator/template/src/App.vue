<template>
  <div id="container">
    <nav-bar/>
    <router-view/>
    <div v-if="loading">loading</div>
    <div class="appContainer" v-html="content">content</div>
  </div>
</template>

<script>
import NavBar from '@/components/navBar'
export default {
  name: 'Framework',
  props: {
    loading: Boolean,
    content: String,
  },
  components:{ NavBar }
}
</script>
