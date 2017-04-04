<template>
  <div id="app">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-button @click="ToastFn"> Toast </mt-button>
    <mt-button @click="IndicatorFn"> Indicator </mt-button>
    <mt-button @click="MessageBoxFn"> MessageBox </mt-button>
    <mt-button @click="MessageBoxAlert"> MessageBoxAlert.then </mt-button>
    <mt-button @click="ActionsheetFn"> Actionsheet </mt-button>

    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>


  </div>
</template>

<script>

import { Toast, Indicator, MessageBox, Actionsheet  } from 'mint-ui';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sheetVisible: false,
      actions: [
        {
            name: '拍照',
            method () {
              console.log('拍照');
            }
        },
        {
            name: '视频',
            method () {
              console.log('视频');
            }
        }
      ]
    }
  },
  methods: {
    ToastFn () {
      Toast({
        message: 'upload success',
        position: 'bottom',
        iconClass: 'd-icon-success',
        duration: 3000
      });
    },
    IndicatorFn () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      setTimeout(() => {
         Indicator.close();
         Toast({
          message: '加载失败！',
          position: 'bottom',
          duration: 1000
        });
      }, 5000)
    },
    MessageBoxFn () {
      MessageBox('提示', '操作成功');
    },
    MessageBoxAlert () {
      MessageBox.confirm('确定执行此操作？').then(action => {
          console.log('确定');
      })
    },
    ActionsheetFn () {
      this.sheetVisible = true
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
