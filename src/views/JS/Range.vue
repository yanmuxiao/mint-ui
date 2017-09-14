<template>

	<div class="main-vue">

    <mt-header title="Range"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="range-content">

        <p>{{rangeValue1}}</p>
        <mt-range v-model="rangeValue1"></mt-range>


        <p>{{rangeValue2}}</p>
        <mt-range v-model="rangeValue2"></mt-range>


        <p>{{rangeValue3}}</p>
        <mt-range
          v-model="rangeValue3"
          :min="10"
          :max="90"
          :step="10"
          :bar-height="5">
        </mt-range>


        <p>{{rangeValue4}}</p>
        <mt-range v-model="rangeValue4">
          <div slot="start">0</div>
          <div slot="end">100</div>
        </mt-range>

    </div>


	</div>


</template>

<style>
  .range-content {
      padding: 20px;
  }
  .range-content .mt-range {
      margin: 20px 0;
  }
</style>


<script>

  import { Range  } from 'mint-ui';

  export default {

    data () {
      return {
        rangeValue1: 0,
        rangeValue2: 20,
        rangeValue3: 20,
        rangeValue4: 10
      }
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }

  }
</script>