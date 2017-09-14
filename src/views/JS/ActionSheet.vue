<template>

	<div class="main-vue">


    <mt-header title="Action Sheet"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <div class="mint-btns">
      <mt-button type="default" @click.native="actionsheet1">点击弹出ActionSheet</mt-button>
    </div>


    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible"
      :closeOnClickModal = "true"
      cancelText = "关闭或取消">
    </mt-actionsheet>


	</div>


</template>

<style>

</style>


<script>

  import { Actionsheet  } from 'mint-ui';

  export default {

    data () {
      return {
        sheetVisible: false,
        actions: [{
          name : '拍照',
          method: () => {
              console.log('拍照');
          }
        }, {
          name: '从相册中选择',
          method: () => {
              console.log('从相册中选择');
          }
        }]
      }
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        },

        actionsheet1() {
            this.sheetVisible = true;
        },
        actionsheet2() {
            let toastObj2 = Toast({
              message: '操作成功',
              iconClass: 'icon d-icon-success',
              duration: 2000
            });
        },
        actionsheet3() {
            let toastObj3 = Toast({
              message: '提示',
              position: 'bottom',
              duration: 2000
            });
        }
    }

  }
</script>