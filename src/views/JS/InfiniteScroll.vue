<template>

	<div class="main-single-vue">

    <mt-header title="loadmore"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <ul class="infinitescrollW"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list">{{ item }}</li>
    </ul>


	</div>


</template>

<style>
.main-single-vue {
  margin-top: 44px;
}
.infinitescrollW {
  margin: 0;
}
.infinitescrollW li {
    display: block;
    line-height: 2;
    text-align: center;
}

</style>


<script>

  import { InfiniteScroll  } from 'mint-ui';

  export default {

    data () {
      return {
        list: [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10],

        loadMoreEnd: 1,
        loading: false
      }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        loadMore() {

          if(this.loadMoreEnd > 5) {
              this.loading = false;
              return;
          } else {
              this.loading = true;
          }
          
          setTimeout(() => {
            let last = this.list[this.list.length - 1];
            for (let i = 1; i <= 10; i++) {
              this.list.push(last + i);
            }
            this.loading = false;
            this.loadMoreEnd++;
          }, 2000);
        }

    }

  }
</script>