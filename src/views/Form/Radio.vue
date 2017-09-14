<template>

	<div class="main-vue">

    <mt-header title="Radio"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <mt-radio
      title="单选框列表"
      v-model="value"
      :options="checklist"
      align="right"
      >
    </mt-radio>

    <mt-cell title="选中" :value="value"></mt-cell>


	</div>



</template>

<style>

</style>


<script>

  import { Radio } from 'mint-ui';

  export default {

    data () {
      return {
        value: '选项B', // 不能为数组
        checklist: [
            {
                label: '选项A',
                value: '选项A'
            },
            {
                label: '选项B',
                value: '选项B'
            },
            {
                label: '选项C已禁用',
                value: '选项C已禁用',
                disabled: true
            },
            {
                label: '选项D',
                value: '选项D'
            },
            {
                label: '选项E',
                value: '选项E'
            }
        ]
      }
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }

  }
</script>