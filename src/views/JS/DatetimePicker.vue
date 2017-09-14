<template>

  <div class="main-vue">

    <mt-header title="Datetime Picker"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <div class="mint-btns">
      <mt-button type="default" @click.native="openDateTimePicker">点击弹出Datetime Picker</mt-button>
      <p>{{dateTimeVal}}</p>


      <mt-button type="primary" @click.native="openDatePicker">点击弹出Date Picker</mt-button>
      <p>{{dateVal}}</p>


      <mt-button type="danger" @click.native="openTimePicker">点击弹出Time Picker</mt-button>
      <p>{{timeVal}}</p>


      <mt-button type="danger" @click.native="openModelDatePicker">自定义模板</mt-button>
      <p>{{dateModelVal}}</p>


    </div>


    <mt-datetime-picker
      ref="datetimepicker"
      type="datetime"
      v-model="pickerDatetimeValue"
      @confirm="datetimeFn">
    </mt-datetime-picker>

    <mt-datetime-picker
      ref="datepicker"
      type="date"
      v-model="pickerDateValue"
      @confirm="dateFn">
    </mt-datetime-picker>

    <mt-datetime-picker
      ref="timepicker"
      type="time"
      v-model="pickerTimeValue"
      @confirm="timeFn">
    </mt-datetime-picker>


    <mt-datetime-picker
      v-model="pickerVisible"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      ref="modeldatepicker"
      @confirm="modelDateFn">
    </mt-datetime-picker>


  </div>


</template>

<style>

</style>


<script>

  import { Toast } from 'mint-ui';

  export default {

    data () {
      return {
        dateTimeVal: '',
        dateVal: '',
        timeVal: '',

        dateModelVal: ''

      }
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        },
        openDateTimePicker() {
            this.$refs.datetimepicker.open();
        },
        openDatePicker() {
            this.$refs.datepicker.open();
        },
        openTimePicker() {
            this.$refs.timepicker.open();
        },
        openModelDatePicker() {
            this.$refs.modeldatepicker.open();
        },


        datetimeFn(dateValue) {
            this.dateTimeVal = dateValue.toString();
            console.log(dateValue);
        },

        dateFn(dateValue) {
            this.dateVal = dateValue.toString();
            console.log(dateValue);
        },

        timeFn(dateValue) {
            this.timeVal = dateValue.toString();
            console.log(dateValue);
        },

        modelDateFn(dateValue) {
            this.dateModelVal = dateValue.toString();
            console.log(dateValue);
        }


    }

  }
</script>