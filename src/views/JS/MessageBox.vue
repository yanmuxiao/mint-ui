<template>

	<div class="main-vue">


    <mt-header title="Message box"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <div class="mint-btns">

      <mt-button type="default" @click.native="MessageBox1">Message box</mt-button>

      <mt-button type="primary" @click.native="MessageBox2">Message alert</mt-button>
      <mt-button type="primary" @click.native="MessageBox3">Message confirm</mt-button>
      <mt-button type="danger" @click.native="MessageBox4">Message prompt</mt-button>
    </div>
	</div>


</template>

<style>

</style>


<script>

  import { MessageBox  } from 'mint-ui';

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
        MessageBox1() {
            //MessageBox('提示', '操作成功');
            MessageBox({
              title: '提示',
              message: '操作成功',
              showCancelButton: false
            });
        },
        MessageBox2() {
            MessageBox.alert('操作成功', '自定义提示标题').then(action => {
              console.log(action)
            });
        },
        MessageBox3() {
            MessageBox.confirm('确定执行此操作?', '自定义提示标题').then(action => {
              console.log('已执行此操作')
            });
        },
        MessageBox4() {
            MessageBox.prompt('请输入姓名', '自定义提示标题').then(({ value, action }) => {
              console.log(value);
            });
        }
    }

  }
</script>