<template>
  <div id="app" class="app-contain">

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
  html, body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #eaeff2;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: block;
    margin: 0;
  }

  a {
    color: #42b983;
  }
  .app-contain {

  }

</style>
