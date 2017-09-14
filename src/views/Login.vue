<template>

	<div class="main-vue">

    <div class="login-vue">
      <div>
          <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      </div>

      <div style="margin-top: 60px;">
        <mt-button type="primary" size="large" @click="loginFn">登录</mt-button>
      </div>
    </div>

	</div>


</template>

<style>

  .login-vue {
      padding: 15px;
  }
</style>


<script>
  

  export default {

  	props: ['jsCssComponent'],

    data () {
      return {
          username: 'admin',
          password: 123456
      }
    },
    methods: {
        loginFn() {
            this.$router.push({path: '/main'})
        }
    }

  }
</script>