<template>
  <div id="app">

    <mt-header :title="titleText"  :fixed=true>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <router-view jsCssComponent="jscssdfdfdf"></router-view>



    <mt-tabbar :fixed=true  v-model="selected">
      <mt-tab-item id="takeAway">
        <i class="tabbar-icon d-icon-info"></i>
        JS
      </mt-tab-item>
      <mt-tab-item id="order">
        <i class="tabbar-icon d-icon-close-circle"></i>
        CSS
      </mt-tab-item>
    </mt-tabbar>


  </div>
</template>

<script>



export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      titleText: 'JS',
      selected: 'takeAway'
    }
  },
  methods: {
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
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

.tabbar-icon {
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto;
}
.tabbar-icon:before {
  font-size: 20px;
}

.takeAwayClick, .orderClick {
  display: none;
}

</style>
