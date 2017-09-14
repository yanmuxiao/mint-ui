<template>

	<div class="main-vue">

    <mt-header title="refresh"  :fixed=true>
      <router-link to="/main" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <ul class="loadmore-list-w">
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </mt-loadmore>


	</div>


</template>

<style>

.loadmore-list-w {
  margin: 0;
}
.loadmore-list-w li {
    display: block;
    text-align: center;
    line-height: 2;
}
  
</style>


<script>

  import { Loadmore } from 'mint-ui';

  export default {

    data () {
      return {
        list: [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
      }
    },
    methods: {
        loadTop() {

          setTimeout(()=>{
              this.list.push(1,2,3,4,5,6,7,8,9,10);
              this.$refs.loadmore.onTopLoaded();
              console.log(this.list.length)
          }, 2000)
          //... 加载更多数据
        }

    }

  }
</script>