<template>

	<div class="main-vue">

    <mt-header title="Search"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <div>

        <mt-search v-model="value"></mt-search>

    </div>


	</div>



</template>

<style>

</style>


<script>

  import { Search  } from 'mint-ui';

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