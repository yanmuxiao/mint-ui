<template>

	<div class="navbar-vue">

    <mt-header title="Navbar"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    
    <mt-navbar v-model="selected" :fixed="true">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>



    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 16" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 24" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 26" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>




	</div>



</template>

<style>

.navbar-vue .mint-navbar.is-fixed {
  top: 44px;
}
.navbar-vue .mint-tab-container {
  top: 88px;
}
</style>


<script>

  import { Navbar, TabItem } from 'mint-ui';

  export default {

    data () {
      return {
        selected: '1',
        selectedVal: '1'
      }
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }

  }
</script>