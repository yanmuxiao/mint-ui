<template>

	<div class="main-vue">

    <mt-header title="Header"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>




  <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
    <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>



	</div>



</template>

<style>

</style>


<script>

  import { Toast } from 'mint-ui';

  export default {

    data () {
      return {
      }
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }

  }
</script>