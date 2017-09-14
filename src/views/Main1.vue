<template>
  <div class="main-vue">


    <mt-header :title="selected"  :fixed=true></mt-header>


    <mt-tabbar v-model="selected" :fixed=true>
      <mt-tab-item id="js组件">
        <img slot="icon" src="../assets/tabbar.png">
        JS
      </mt-tab-item>
      <mt-tab-item id="css组件">
        <img slot="icon" src="../assets/tabbar.png">
        CSS
      </mt-tab-item>
      <mt-tab-item id="表单组件">
        <img slot="icon" src="../assets/tabbar.png">
        Form
      </mt-tab-item>
    </mt-tabbar>


    <mt-tab-container v-model="selected">

      <mt-tab-container-item id="js组件">
          <mt-cell title="Toast" is-link to="/toast"></mt-cell>
          <mt-cell title="Indicator" is-link to="/indicator"></mt-cell>
          <mt-cell title="Loadmore(refresh)" is-link to="/loadmore"></mt-cell>
          <mt-cell title="Infinitescroll(loadmore)" is-link to="/infinitescroll"></mt-cell>
          <mt-cell title="Messagebox" is-link to="/messagebox"></mt-cell>
          <mt-cell title="Actionsheet" is-link to="/actionsheet"></mt-cell>
          <mt-cell title="Popup" is-link to="/popup"></mt-cell>
          <mt-cell title="Swipe" is-link to="/swipe"></mt-cell>
          <mt-cell title="Lazyload" is-link to="/lazyload"></mt-cell>
          <mt-cell title="Range" is-link to="/range"></mt-cell>
          <mt-cell title="Progress" is-link to="/progress"></mt-cell>
          <mt-cell title="Picker" is-link to="/picker"></mt-cell>
          <mt-cell title="Datetime Picker" is-link to="/datetimepicker"></mt-cell>
          <mt-cell title="Index List" is-link to="/indexlist"></mt-cell>

      </mt-tab-container-item>


      <mt-tab-container-item id="css组件">

          <mt-cell title="Header" is-link to="/header"></mt-cell>
          <mt-cell title="Tabbar" is-link to="/tabbar"></mt-cell>
          <mt-cell title="Navbar" is-link to="/navbar"></mt-cell>
          <mt-cell title="Button" is-link to="/button"></mt-cell>
          <mt-cell title="Spinner" is-link to="/spinner"></mt-cell>
          <mt-cell title="Search" is-link to="/search"></mt-cell>

      </mt-tab-container-item>


      <mt-tab-container-item id="表单组件">

          <mt-cell title="Switch" is-link to="/switch"></mt-cell>
          <mt-cell title="Checklist(checkbox)" is-link to="/checklist"></mt-cell>
          <mt-cell title="Radio" is-link to="/radio"></mt-cell>
          <mt-cell title="Field" is-link to="/field"></mt-cell>
          <mt-cell title="Badge" is-link to="/badge"></mt-cell>

      </mt-tab-container-item>

    </mt-tab-container>


  </div>
</template>

<script>

import { Navbar, TabItem, Indicator } from 'mint-ui';

export default {
  name: 'app',
  data () {
    return {
      selected: 'js组件'
    }
  },
  methods: {
  },
  created() {
    Indicator.close();
  }
}
</script>

<style>

.mint-header-title {
  font-size: 16px;
}

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




</style>
