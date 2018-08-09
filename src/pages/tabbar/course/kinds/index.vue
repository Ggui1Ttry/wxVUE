<template>
    <div class="mContainer">
      <kinds
        :kindsProp="kindsProp"
        @itemDetail="productDetails"
        @bannerDetail="bannerDetails"
      ></kinds>
    </div>
</template>
<script>
  import kinds from '@/components/kinds/index'
  import detail from './kindsdata';
  export default {
      data() {
          return {
            kindsProp:{
              menu: [
                {name:'推荐专区',id:'0001'},
                {name:'街舞',id:'0002'},
                {name:'芭蕾舞',id:'0003'},
                {name:'现代舞',id:'0004'},
                {name:'国标舞',id:'0005'},
              ],
              detail: detail
            }
          };
      },
      components: {
        kinds
      },
      methods: {
        productDetails(e) {
          wx.navigateTo({
            url: '/pages/index/receive/receive',

          })
        },
        bannerDetails(e) {
          wx.navigateTo({
            url: '/pages/index/receive/receive',

          })
        },
      },
      created() {
      }
  }
</script>
<style scoped>
    @import './index.css';

    .container {
    }
</style>
