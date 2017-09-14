<template>

	<div class="main-vue">

    <mt-header title="Toast"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="mint-btns">
      <mt-button type="default" @click.native="toast1">点击弹出Toast</mt-button>
      <mt-button type="primary" @click.native="toast2">点击弹出待icon的Toast</mt-button>
      <mt-button type="danger" @click.native="toast3">自定义Toast的位置</mt-button>
    </div>
	</div>


</template>

<style>
  
  .mint-btns {
      padding: 20px;
      text-align: center;
  }

  .mint-btns > button {
      margin-top: 30px;
      display: block;
      width: 100%;
  }

</style>


<script>

  import { Toast } from 'mint-ui';

  export default {

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