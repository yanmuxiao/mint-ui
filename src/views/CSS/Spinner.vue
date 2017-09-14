<template>

	<div class="main-vue">

    <mt-header title="Spinner"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="spinner-vue">

        <mt-cell title="snake">
          <mt-spinner type="snake"></mt-spinner>
        </mt-cell>

        <mt-cell title="double-bounce">
          <mt-spinner type="double-bounce"></mt-spinner>
        </mt-cell>


        <mt-cell title="triple-bounce">
          <mt-spinner type="triple-bounce"></mt-spinner>
        </mt-cell>

        <mt-cell title="fading-circle">
          <mt-spinner type="fading-circle"></mt-spinner>
        </mt-cell>

        
        
        

    </div>



	</div>



</template>

<style>


</style>


<script>

  import { Spinner  } from 'mint-ui';

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