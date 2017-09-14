<template>

	<div class="main-vue">

    <mt-header title="Palette Button"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


     <mt-palette-button content="+" class="palette-vue">
      <div class="my-icon-button"></div>
      <div class="my-icon-button"></div>
      <div class="my-icon-button"></div>
    </mt-palette-button>
    


    <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
      direction="rt" class="pb palette-vue2" :radius="180" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
      style="left:30px;">
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
    </mt-palette-button>



	</div>


</template>

<style>
  
  .palette-vue {
      position: fixed;
      bottom: 30px;
      right: 30px;
      color: #fff;
  }

  .palette-vue2 {
      position: fixed;
      top: 50%;
      left: 200px;
  }
  .my-icon-button {
      width: 40px;
      height: 40px;
      background-color: #f00;
      border-radius: 100%;
  }

</style>


<script>

  import { PaletteButton  } from 'mint-ui';

  export default {

    data () {
      return {
      }
    },

    methods: {

      goBack() {
            this.$router.go(-1);
      },
        
      main_log(val) {
        console.log('main_log', val);
      },
      sub_log(val) {
        console.log('sub_log', val);
        this.$refs.target_1.collapse();
      }

    }

  }
</script>