<template>

	<div class="main-vue">

    <mt-header title="Progress"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="js-content">

      <p>默认</p>
      <mt-progress></mt-progress>


      <p>value: 20</p>
      <mt-progress :value="20" :bar-height="5"></mt-progress>


      <p>左右文字</p>
      <mt-progress :value="60">
        <div slot="start">0%</div>
        <div slot="end">100%</div>
      </mt-progress>


      <p>定义线宽</p>
      <mt-progress :value="20" :bar-height="15"></mt-progress>


    </div>
	</div>


</template>

<style>
  
  .js-content {
      padding: 20px;
      background-color: #fff;
  }

</style>


<script>

  import { Progress } from 'mint-ui';

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
        }
    }

  }
</script>