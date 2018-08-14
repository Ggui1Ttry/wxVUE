<template>
  <div class="mContainer">
    <view class="header">
      <view class="header_content">
        <image class="avatarUrl" :src="user.avatarUrl"></image>
        <view v-if="!user.status">
          <zan-button class="nickName cfff" open-type="getUserInfo">获取授权</zan-button>
        </view>
        <view v-if="user.status">
          <view  class="nickName cfff">{{user.nickName}}</view>
        </view>

      </view>
    </view>
    <view class="mContent">

      <phoneBind v-if="!user.bindPhone"></phoneBind>

      <zan-cell-group class="fragment" title-width="90">
        <zan-cell title="电话客服" @tap="consultingService" is-link url=""></zan-cell>
      </zan-cell-group>
      <zan-cell-group class="fragment"  title-width="90">
        <block v-for="(item, index) in optionList[user.role]" :index="index" :key="key">
          <zan-cell :title="item.labelMain" :value="item.labelPart" is-link @click="forwardPage(item)" :url="item.link"></zan-cell>
        </block>
      </zan-cell-group>
    </view>

  </div>
</template>
<script>
  import phoneBind from '@/components/tip/phoneBind/index';
  export default {
    data () {
      return {
        user:{
          nickName:'未登陆',
          avatarUrl:'/static/resources/images/user.png',
          city:'',
          province:'',
          country:'',
          language:'',
          gender:'',
          status:false,
          role:'student',
          bindPhone:false
        },
        optionList:{
          student:[
            {
              labelMain:'报名课程直播',
              labelPart:'点击报名',
              link:'/pages/tabbar/course/kinds/index',
              isTab:true,
              code:'001'
            },
            {
              labelMain:'我的订单',
              labelPart:'查看全部订单',
              link:'/pages/order/index',
              code:'002'
            },
            {
              labelMain:'我的请假',
              link:'',
              code:'003'
            },
            {
              labelMain:'补课情况',
              link:'',
              code:'004'
            },
            {
              labelMain:'通知查看',
              link:'',
              code:'005'
            },
            {
              labelMain: '我的活动',
              link:'',
              code: '006'
            }
          ],
          teacher:[
            {
              labelMain: '学生签到管理',
              link:'',
              code: '101'
            },
            {
              labelMain: '课程任务',
              link:'',
              code: '102'
            },{
              labelMain: '我的请假',
              link:'',
              code: '103'
            },
            {
              labelMain: '通知管理',
              link:'',
              code: '104'
            }
          ]
        }
      };
    },
    components: {
      phoneBind
    },
    methods:{
      forwardPage (item) {
        console.log('item:',item)
        const isTab = item.isTab == undefined ? false: item.isTab;
        //$router.push({ path: item.link, isTab: isTab })
        if (isTab){
          wx.switchTab({
            url: item.link
          })
        }else {
          wx.navigateTo({
            url: item.link
          })
        }
      },
      consultingService(){
        wx.makePhoneCall({
          phoneNumber: '15371333230' //仅为示例，并非真实的电话号码
        })

      },
      getUserInfo() {
        let $this = this;
        wx.getUserInfo({
          success: function(res) {
            console.log(res.userInfo);
            Object.assign($this.user, res.userInfo);
            $this.user.status = true;
          },
          fail: function (res) {
            $this.user.status = false;
          }
        });
      },
      // 下拉刷新方法，与methods方法同级
      async onPullDownRefresh() {
        // to doing..
        // 停止下拉刷新
        console.log("停止下拉刷新")
        setTimeout(function () {
          wx.stopPullDownRefresh();
        },2000)

      },

// 上拉加载，拉到底部触发
      onReachBottom() {
        // 到这底部在这里需要做什么事情
        //this.loadMore();
      },
    },
    onShow(){

    },
    created () {
      this.getUserInfo();
    }
  }
</script>
<style scoped>
  @import 'index.less';
  .mContainer{
    background-color: #F9F9F9;
  }
</style>
