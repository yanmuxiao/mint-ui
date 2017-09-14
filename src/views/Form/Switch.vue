<template>

	<div class="main-vue">

    <mt-header title="Switch"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>



    <div>
        
        <mt-cell :title="'选项为' + value1">
          <mt-switch v-model="value1"></mt-switch>
        </mt-cell>
        <mt-cell :title="'选项为' + value2">
          <mt-switch v-model="value2"></mt-switch>
        </mt-cell>
        

    </div>


	</div>



</template>

<style>

</style>


<script>

  import { Switch  } from 'mint-ui';

  export default {

    data () {
      return {
          value1: false,
          value2: true
      }
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }

  }
</script>