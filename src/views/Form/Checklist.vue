<template>

	<div class="main-vue">

    <mt-header title="Checklist(checkbox)"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <mt-checklist
      title="复选框列表(设置了最多选3个，右对齐)"
      v-model="value"
      :options="checklist"
      :max="3"
      align="right"
      >
    </mt-checklist>

    <mt-cell title="选中" :value="value"></mt-cell>


	</div>



</template>

<style>

</style>


<script>

  import { Checklist } from 'mint-ui';

  export default {

    data () {
      return {
        value: ['选项A'],
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