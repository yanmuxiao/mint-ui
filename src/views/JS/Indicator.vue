<template>

	<div class="main-vue">

    <mt-header title="Indicator"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <div class="mint-btns">
      <mt-button type="default" @click.native="indicator1">点击弹出Indicator</mt-button>
      <mt-button type="primary" @click.native="indicator2">可配置的spinner</mt-button>
      <mt-button type="danger" @click.native="indicator3">点击弹出带文字的Indicator</mt-button>
    </div>
	</div>


</template>

<style>

</style>


<script>

  import { Indicator } from 'mint-ui';

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
        indicator1() {
            Indicator.open();

            setTimeout(()=>{
                Indicator.close();
            }, 2000)
        },
        indicator2() {
            Indicator.open({
              text: '加载中...',
              spinnerType: 'fading-circle'
              /**
               *  snake
                  fading-circle
                  double-bounce
                  triple-bounce
               */


            });
            setTimeout(()=>{
                Indicator.close();
            }, 2000)
        },
        indicator3() {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'double-bounce'
            });
            setTimeout(()=>{
                Indicator.close();
            }, 2000)
        },


        indicatorClose() {console.log('abac')
            Indicator.close();
        }

    },
    watch: {

        "$route": this.indicatorClose
    }

  }
</script>