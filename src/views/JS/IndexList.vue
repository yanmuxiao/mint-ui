<template>

	<div class="main-vue">

    <mt-header title="IndexList"  :fixed=true>
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    
    <mt-index-list>

      <mt-index-section v-for="list in lists" :index="list.index">
        <mt-cell v-for="c in list.indexContent" :title="c"></mt-cell>
      </mt-index-section>


    </mt-index-list>


	</div>


</template>

<style>
  .mint-indexlist {
      position: fixed;
      top: 44px;
      left: 0;
      right: 0;
      bottom: 0;
  }

</style>


<script>

  import { IndexList, IndexSection } from 'mint-ui';

  export default {

    data () {
      return {
          lists: [
              {   
                  index: 'A',
                  indexContent : ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8']
              },
              {   
                  index: 'B',
                  indexContent : ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8']
              },
              {   
                  index: 'C',
                  indexContent : ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8']
              },
              {   
                  index: 'D',
                  indexContent : ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8']
              },
              {   
                  index: 'E',
                  indexContent : ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8']
              },
              {   
                  index: 'F',
                  indexContent : ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8']
              },
              {   
                  index: 'G',
                  indexContent : ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8']
              },
              {   
                  index: 'H',
                  indexContent : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8']
              },
              {   
                  index: 'I',
                  indexContent : ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8']
              },
              {   
                  index: 'J',
                  indexContent : ['j1', 'j2', 'j3', 'j4', 'j5', 'j6', 'j7', 'j8']
              },
              {   
                  index: 'K',
                  indexContent : ['k1', 'k2', 'k3', 'k4', 'k5', 'k6', 'k7', 'k8']
              },
              {   
                  index: 'L',
                  indexContent : ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8']
              },
              {   
                  index: 'M',
                  indexContent : ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8']
              },
              {   
                  index: 'N',
                  indexContent : ['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8']
              },
              {   
                  index: 'O',
                  indexContent : ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'o8']
              },
              {   
                  index: 'P',
                  indexContent : ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8']
              },
              {   
                  index: 'Q',
                  indexContent : ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8']
              },
              {   
                  index: 'R',
                  indexContent : ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8']
              },
              {   
                  index: 'S',
                  indexContent : ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8']
              },
              {   
                  index: 'T',
                  indexContent : ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8']
              },
              {   
                  index: 'U',
                  indexContent : ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8']
              },
              {   
                  index: 'V',
                  indexContent : ['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8']
              },
              {   
                  index: 'W',
                  indexContent : ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7', 'w8']
              },
              {   
                  index: 'X',
                  indexContent : ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8']
              },
              {   
                  index: 'Y',
                  indexContent : ['y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7', 'y8']
              },
              {   
                  index: 'Z',
                  indexContent : ['z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7', 'z8']
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