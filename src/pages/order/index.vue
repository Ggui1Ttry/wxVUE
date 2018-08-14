<template>
    <div class="mContainer">
        <view class="tab">
          <view class="phoneBind">
            <phoneBind  v-if="!user.bindPhone"></phoneBind>
          </view>
          <zan-tab
            class="tab-list"
            :scroll="scroll"
            :list="list"
            :height="height"
            :selected-id="selectedId"
            @tabchange="handleTabChange"
          />
        </view>
        <view class="swiperContainer">
          <swiper  class="swiper" :style="{'height':swiperheight}" @change="switchTab" :current-item-id="selectedId" >
            <swiper-item class="swiperItem"  :item-id="item.id" v-for="(item, index) in list" :index="item.id" :key="item.id">
              <scroll-view class="swiperScroll" scroll-y="true">
                <order-list :order="item"></order-list>
              </scroll-view>
            </swiper-item>
          </swiper>
        </view>
    </div>
</template>
<script>
    import phoneBind from '@/components/tip/phoneBind/index';
    import orderList from '@/components/order/list/index'
    export default {
        data() {
            return {
              user:{
                bindPhone:false
              },
              list
              : [{
                // tab 项 id
                id: 'all',
                // tab 项展示文案
                title: '全部'
              }, {
                id: 'topay',
                title: '待付款'
              }, {
                id: 'tosend',
                title: '待发货'
              }, {
                id: 'send',
                title: '待收货'
              }, {
                id: 'sign',
                title: '已完成'
              },
              {
                id: 'comment',
                title: '待评价'
              },
              {
                id: 'exchange',
                title: '退换/售后'
              }
              ]
              ,
              scroll:true,
              height:'44',
              selectedId:'all',
              toViewId:'all',
              tabHeight:45,
              viewHeight:0
            };
        },
        computed:{
          swiperheight: function () {
            console.log('viewHeight:',this.viewHeight)
            return (this.viewHeight-this.tabHeight)+'px'
          }
        },
        components: {
          orderList,phoneBind
        },
        methods: {
          handleTabChange(e){
            //e.mp.detail;
            console.log("e:",e.mp)
            //this.toViewId = e.mp.detail;
            this.selectedId = e.mp.detail;
          },
          switchTab(e){
            console.log("e:",e)
            this.selectedId = e.mp.detail.currentItemId;
          }
        },

      onLoad(){

        var that = this;
        console.log('that:',that)
        wx.getSystemInfo({
          success: function (res) {
            that.viewHeight =  res.windowHeight - (res.windowWidth / 750) * 94
          }
        })
        //创建节点选择器
        var query = wx.createSelectorQuery();
        //选择id

        query.select('.tab-list').boundingClientRect(function (rect) {
          that.tabHeight = rect.height
        }).exec();
      }
    }
</script>
<style scoped>
    @import 'index.wxss';

    .container {
    }
</style>
