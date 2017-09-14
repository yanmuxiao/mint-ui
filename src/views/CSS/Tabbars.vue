<template>

	<div class="main-vue">

    <mt-header title="Tabbars"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    
    <mt-tabbar v-model="selected" fixed="true">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../../assets/tabbar.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../../assets/tabbar.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../../assets/tabbar.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../assets/tabbar.png">
        我的
      </mt-tab-item>
    </mt-tabbar>


    <mt-tab-container v-model="selected" swipeable>
      <mt-tab-container-item id="外卖">
        <mt-cell v-for="n in 20" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mt-cell v-for="n in 6" :title="'我的 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>

	</div>



</template>

<style>

</style>


<script>

  import { Navbar, TabItem } from 'mint-ui';

  export default {

    data () {
      return {
          selected: '外卖'
      }
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }

  }
</script>