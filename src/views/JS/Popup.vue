<template>

	<div class="main-vue">

    <mt-header title="Popup"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="mint-btns">
      <mt-button type="default" @click.native="popup1">点击弹出Popup</mt-button>
    </div>




    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      position="center">
      这是什么东西！
    </mt-popup>

	</div>


</template>

<style>

  .mint-popup {
      padding: 8px 14px;
      border-radius: 3px;
      line-height: 2;
  }
  
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

  import { Popup  } from 'mint-ui';

  export default {

    data () {
      return {
        popupVisible: false
      }
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        },
        popup1() {
            this.popupVisible = true;
        }
    }

  }
</script>