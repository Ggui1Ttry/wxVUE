<template>
    <div class="mContainer" >
          <view v-for="(item,index) in orders" :key="index">
            <zan-card
              thumb="https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg"
              price="999.99"
              title="红烧牛肉【虚拟商品】【有库存】【有sku】"
              num="2"
              desc="3000克 50%"
              :status="order.title"
            >
            </zan-card>
          </view>
    </div>
</template>
<script>
    export default {
        props:{
          order:{
            type:Object,
            default:function () {
              return {
                title:'已发货'
              }
            }
          }
        },
        data() {
            return {
              orders:[1,2,3,4,5,6,7,8,9,10,110,11,12,13,14,15,16,31,20,40,50]
            };
        },
        components: {},
        methods: {
          loadData(){
            console.log('loadData')
           // this.orders = [1,2]
          }
        },
        created() {
        },
        onShow(){
//          console.log('onShow')
//          if (this.orders.length==0){
//            this.loadData()
//          }
        }
    }
</script>
<style scoped>
    @import './index.css';

    .mContainer {
      background-color: #F9F9F9;
    }
</style>
