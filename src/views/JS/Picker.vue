<template>

	<div class="main-vue">

    <mt-header title="Picker"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="js-content">


      <mt-picker :slots="slots1" @change="onValuesChange1"></mt-picker>
      <p>{{selectedValue1}}</p>



      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      <p>{{selectedValue}}</p>

    </div>
	</div>


</template>

<style>

</style>


<script>

  import { Toast } from 'mint-ui';

  export default {

    data () {
      return {

        slots1: [
            {
              flex: 1,
              values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
              textAlign: 'center',
              defaultIndex: 3 // 默认第几个
            }
        ],
        selectedValue1: '2015-06',


        slots: [
          {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot3',
            textAlign: 'left'
          }
        ],
        selectedValue: null
      }
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        },

        onValuesChange1(picker, values) {

          this.selectedValue1 = values;

        },


        onValuesChange(picker, values) {
          if (values[0] > values[1]) {
            picker.setSlotValue(1, values[0]);
          }
          this.selectedValue = values;
        }
    }

  }
</script>