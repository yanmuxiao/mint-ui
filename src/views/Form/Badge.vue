<template>

	<div class="main-vue">

    <mt-header title="Badge"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div>
        <p>指定尺寸</p>
        <mt-badge size="small">30</mt-badge>
        <mt-badge size="normal">10</mt-badge>
        <mt-badge size="large">10</mt-badge>

        <p>指定类型</p>
        <mt-badge type="primary">30</mt-badge>
        <mt-badge type="error">10</mt-badge>
        <mt-badge type="success">10</mt-badge>
        <mt-badge type="warning">10</mt-badge>

        <p>指定颜色</p>
        <mt-badge size="small" color="#888">自定义颜色</mt-badge>

        <mt-cell title="list">
          <mt-badge size="normal">10</mt-badge>
        </mt-cell>

    </div>


	</div>



</template>

<style>

</style>


<script>

  import { Badge } from 'mint-ui';

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