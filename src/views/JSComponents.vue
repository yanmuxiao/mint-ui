<template>

	<div class="main-content">

    <mt-cell :title="jsCssComponent" is-link></mt-cell>
		<mt-cell :title="jsCssComponent" is-link></mt-cell>

	</div>


</template>

<style>

.main-content {
	margin: 40px 0 50px 0;
}

.main-content .mint-cell-title {
	text-align: left;
}


</style>


<script>
  

  export default {

  	props: ['jsCssComponent'],

    data () {
      return {
        activeIndex: '1'
      }
    },

    methods: {
        
    }

  }
</script>