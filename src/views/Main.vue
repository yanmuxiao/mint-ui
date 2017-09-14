<template>
  <div class="main-vue">


    <mt-header :title="titleText"  :fixed=true>
      <router-link to="/js" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>



    <router-view jsCssComponent="jscssdfdfdf"></router-view>


  
    <footer class="RUI-foot slim-bd-t">
      <div class="wk-b-ap foot-box" @click="fn">

        <div v-for="footer in footers" class="foot-box-list" :class="{'foot-box-cur': footer.selected}">
            <router-link :to="footer.href">
              <i class="iconfont foot-icon" :class="footer.icon"></i>
              <span>{{footer.title}}</span>
            </router-link>
        </div>

      </div>
    </footer>


  </div>
</template>

<script>

import { Indicator } from 'mint-ui';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      titleText: 'JS Components',
      selected: 'js',

      footers: [
        {
          href: '/js',
          title: 'JS Components',
          icon: 'icon-home',
          id: 'index',
          selected: true
        },
        {
          href: '/css',
          title: 'CSS Components',
          icon: 'icon-logistics',
          id: 'logistics',
          selected: false
        },
        {
          href: '/form',
          title: 'Form Components',
          icon: 'icon-cart',
          id: 'cart',
          selected: false
        }
      ]
    }
  },
  methods: {
    fn(event) {
        this.selected = this.$route.path.replace('/', '');
    }
  },
  watch: {
    selected: function() {
      let _this = this;

      this.footers.forEach(function(o, index){

          if(o.href.replace('/', '') == _this.selected) {
            o.selected = true;
            _this.titleText = o.title;
          }else{
            o.selected = false;
          }

      })
    },
    "$route": "fn"
  },
  created() {
    this.selected = 'js';

    Indicator.close();
  }
}
</script>

<style>

.mint-header {
    height: 44px;
}

.main-vue {
    margin: 44px 0 50px 0;
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



.RUI-foot{
  width:100%;
  height:50px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.RUI-foot:before {
    height: 400%;
    width: 100%;
    -webkit-transform: scaleY(0.25);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform-origin: 0 0;
    -webkit-box-sizing: border-box;
    pointer-events: none;
    border-top: 1px solid #ccc;
}
.foot-box{
  display: -webkit-box;
  width:100%;
  height:100%;
  background-color:#fff;
}
.foot-box-list{
  height:100%;
  display:-webkit-box;
  -webkit-box-pack:center;
  -webkit-box-align:center;
  text-decoration:none;
  color:#333;
  -webkit-box-flex:1;
}
.foot-icon {
  font-size:20px;
  color:#333;
  display:block;
  text-align:center;
}
.foot-box-list a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}
.foot-box-list span {
  font-size:11px;
  display:block;
  text-align:center;
  color: #333;
}
.foot-box-cur .foot-icon,.foot-box-cur span{
  color:#d10a3c;
}


</style>
