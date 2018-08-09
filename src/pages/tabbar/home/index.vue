<template>
  <div class="mContainer">
    <view>
      <view>
        <zan-search
          class="search"
          :searchStyle="search.searchStyle"
          :inputStyle="search.inputStyle"
          :keyword="search.inputValue"
          :placeholder="search.placeholder"
        />
        <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <block v-for="(item, index) in movies" :index="index" :key="key">
            <swiper-item>
              <image :src="item.url" class="slide-image" mode="aspectFill"/>
            </swiper-item>
          </block>
        </swiper>
      </view>


      <div>
        <view class="zan-font-12" :style="{'text-align':'center',padding:'2px'}">{{landscape.title}}</view>
        <scroll-view  class="scroll_box"  scroll-x  >
          <block v-for="(item, index) in landscape.sales" :index="index" :key="key">
            <div class="item_list">
              <image mode="aspectFill" class="circle_item_img" src="https://i.loli.net/2017/08/21/599a521472424.jpg"></image>
              <view class="zan-font-14 circle_item_label">{{item.label}}</view>
            </div>
          </block>
        </scroll-view>
      </div>
      <i-card title="优惠券" extra="立即领取" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
        <view class="circle_item_label" slot="content">满99元使用</view>
      </i-card>
      <div class="groupSale">
        <div class="cardView"  v-for="(item, index) in groupSale" :index="index" :key="key">
          <group-item
            :showProp="item"
          ></group-item>
        </div>
      </div>
    </view>
    <zan-loadmore v-if="refresh.pullLoading" type="loading" text="努力加载中"></zan-loadmore>
  </div>
</template>

<script>
  //# 由于 mpvue component 暂不支持全局注册，暂时只能使用局部注册
import card from '@/components/card';
import groupItem from '@/components/sale/groupItem';
export default {
  data () {
    return {
      refresh:{
        pullLoading:false
      },
      search:{
        inputValue:'',
        placeholder:'请输入想要查找课程',
        searchStyle: "height: 60rpx; padding: 0 30rpx;",
        inputStyle:"height: 46rpx; border-radius: 8rpx;text-align:center;"
      },
      landscape:{
        title:'HOT SALE',
        sales:[
          {
            label:'买袜子',
            img:'https://i.loli.net/2017/08/21/599a521472424.jpg'
          },
          {
            label:'买内裤',
            img:'https://i.loli.net/2017/08/21/599a521472424.jpg'
          },
          {
            label:'包年服务',
            img:'https://i.loli.net/2017/08/21/599a521472424.jpg'
          }
          ,{
            label:'精选推荐',
            img:'https://i.loli.net/2017/08/21/599a521472424.jpg'
          }
          ,{
            label:'其他',
            img:'https://i.loli.net/2017/08/21/599a521472424.jpg'
          }
        ]
      },
      movies:[
        {url:'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg'} ,
        {url:'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg'} ,
        {url:'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg'} ,
        {url:'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'}
      ],
      groupSale:[
        {
          groupImage:'https://i.loli.net/2017/08/21/599a521472424.jpg',
          groupProgress:'84人已团',
          groupFormat:'2人团',
          title:'免费试用|创作7年，更懂男人的男人袜',
          groupPrice:'$0.01',
          singlePrice:'$22.00'
        },
        {
          groupImage:'https://i.loli.net/2017/08/21/599a521472424.jpg',
          groupProgress:'8人已团',
          groupFormat:'2人团',
          title:'【团购¥69】随心裁底衫',
          groupPrice:'$69.00',
          singlePrice:'$158.00'
        }
      ]
    }
  },

  components: {
    groupItem
  },

  methods: {

  },

  // 下拉刷新方法，与methods方法同级
  async onPullDownRefresh() {
    let $this = this;
    console.log("下拉刷新")
    // to doing..
    //this.refresh.downLoading = true;
    wx.showNavigationBarLoading() //在标题栏中显示加载
    // 停止下拉刷新

    setTimeout(function () {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh();
      //$this.refresh.downLoading = false;
    },600)

  },

// 上拉加载，拉到底部触发
  onReachBottom() {
    // 到这底部在这里需要做什么事情
    //this.loadMore();
    let $this = this;
    console.log("加载更多")
    this.refresh.pullLoading = true;
    setTimeout(function () {
      $this.refresh.pullLoading = false;
    },600)
  },


  created () {
  }
}
</script>

<style scoped>
  @import 'index.css';
  .mContainer{

  }
</style>
