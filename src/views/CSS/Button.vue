<template>

	<div class="main-vue">

    <mt-header title="Button"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="button-vue">
        <p>改变颜色</p>
        <mt-button type="default" size="large">default</mt-button>
        <mt-button type="primary" size="large">primary</mt-button>
        <mt-button type="danger" size="large">danger</mt-button>

        <p>改变大小</p>
        <mt-button size="small">small</mt-button>
        <mt-button size="large">large</mt-button>
        <mt-button size="normal">normal</mt-button>

        <p>禁用按钮</p>
        <mt-button disabled>disabled</mt-button>

    </div>



	</div>



</template>

<style>
  
  .button-vue {
    padding: 20px;
  }
  .button-vue .mint-button {
    margin-bottom: 20px;
  }


</style>


<script>

  import { Button  } from 'mint-ui';

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