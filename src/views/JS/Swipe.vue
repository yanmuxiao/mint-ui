<template>

	<div class="main-vue">

    <mt-header title="Swipe"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <mt-swipe :auto="4000" class="swipe-vue">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>


	</div>


</template>

<style>
  
  .swipe-vue {
      height: 160px;
  }
  .swipe-vue .mint-swipe-item:first-child {
      background-color: #f00;
  }
  .swipe-vue .mint-swipe-item:nth-child(2) {
      background-color: #0f0;
  }
  .swipe-vue .mint-swipe-item:nth-child(3) {
      background-color: #00f;
  }

</style>


<script>

  import { Swipe, SwipeItem } from 'mint-ui';

  export default {

  	props: ['jsCssComponent'],

    data () {
      return {
        activeIndex: '1'
      }
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        },
        toast1() {
            let toastObj1 = Toast('提示信息');
        },
        toast2() {
            let toastObj2 = Toast({
              message: '操作成功',
              iconClass: 'icon d-icon-success',
              duration: 2000
            });
        },
        toast3() {
            let toastObj3 = Toast({
              message: '提示',
              position: 'bottom',
              duration: 2000
            });
        }
    }

  }
</script>