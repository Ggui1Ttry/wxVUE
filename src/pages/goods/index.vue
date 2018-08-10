<template>
  <view>
    <view class="container">
        <view class="foo_buycar">
          <navigator hover-class="none" open-type="switchTab" url="/pages/index/index">
            <image src="/static/images/home.png"></image>
          </navigator>
          <navigator hover-class="none" url="">
            <image src="/static/images/kefu.png"></image>
          </navigator>
          <view class="car_img" @click="goCar">
            <image src="/static/images/buycar.png">
              <text :class="['carNum',carNum?'':'hide']">{{carNum}}</text>
            </image>
          </view>

          <view class="navbuy" @click="goBuy">立即购买</view>
          <view class="addcar" @click="addCar">加入购物车</view>
        </view>
        <swiper class="pdt_img" @change="changeSwiper" :circular="true">
          <swiper-item v-for="(item,index) in images" :key="index">
            <image class="pdt_image" :src="item.url"></image>
          </swiper-item>
        </swiper>
        <view class="img_text">{{current}}/{{images.length}}</view>
        <view class="pdt_info">
          <view class="info_hd">
            <view class="info_title">带帽日式多功能颈枕</view>
            <view class="info_ide">带帽设计，遮光更安心</view>
          </view>
          <view class="info_bd">
            <view class="info_price">¥89</view>
            <view class="info_des">购买最高得16积分</view>
          </view>
        </view>
        <view class="weui-cells weui-cells_after-title pdt_select">
          <view class="weui-cell weui-cell_access model" hover-class="weui-cell_active" @click="actionSheet">
            <view class="weui-cell__bd">{{model?model:'请选择规格属性'}}{{modNum}}</view>
            <view class="weui-cell__ft weui-cell__ft_in-access"></view>
          </view>
          <view class="weui-cell weui-cell_access pdt_server" hover-class="weui-cell_active" @click="actionSer">
            <view class="weui-cell__bd left">服务：</view>
            <view class="weui-cell__ft weui-cell__ft_in-access right">
              <block v-for="(item,index) in server" :key="index">
                <view class="server_box">
                  <text class="server">{{item.tit}}</text>
                </view>
              </block>
            </view>
          </view>
          <navigator class="weui-cell weui-cell_access comment" hover-class="weui-cell_active" url="">
            <view class="weui-cell__bd text">用户评价(73137)</view>
            <view class="weui-cell__ft  weui-cell__ft_in-access comment_rt">98.3%好评</view>
          </navigator>
        </view>
        <view class="rec">
          <view class="rec_tt">
            <view class="cate_list" data-index="0" @click="switchCategory">
              <text :class="curIndex==0?'on':''">大家都在看</text>
            </view>
            <view class="cate_list" data-index="1" @click="switchCategory">
              <text :class="curIndex==1?'on':''">24小时热销</text>
            </view>
          </view>
          <scroll-view v-if="showtj" class="cate_box" scroll-x scroll-with-animation="true">
            <block v-for="(item,index) in tuijian" :key="index">
              <navigator class="tuijian" hover-class="none" url="/pages/index/receive/receive">
                <image class="tj_img" :src="item.banner"></image>
                <view class="tj_tt">{{item.title}}</view>
                <view class="tj_pc">{{item.price}}</view>
              </navigator>
            </block>
          </scroll-view>
          <scroll-view v-else class="cate_box" scroll-x scroll-with-animation="true">
            <block v-for="(item,index) in rexiao" :key="index">
              <navigator class="tuijian" hover-class="none" url="/pages/index/receive/receive">
                <image class="tj_img" :src="item.banner"></image>
                <view class="tj_tt">{{item.title}}</view>
                <view class="tj_pc">{{item.price}}</view>
              </navigator>
            </block>
          </scroll-view>
        </view>
        <view class="para">
          <view>
            <view class="para_tt">商品参数</view>
            <view class="para_ct">
              <view class="para_ct_lt">材质信息</view>
              <view class="para_ct_rt">
                <view>外套面料：100%棉</view>
                <view>内胆面料：85%锦纶15%氨纶</view>
                <view>填充物：100%聚苯乙烯（发泡粒子)</view>
              </view>
            </view>
            <view class="para_ct">
              <view class="para_ct_lt">注意事项</view>
              <view class="para_ct_rt">
                <view>本品为人工填充粒子，重量难免会有误差，敬请谅解。同时产品在运输过程中受挤压，也可能会造成凹陷。储存时请避免重物挤压以引起泡沫粒子塌陷。</view>
              </view>
            </view>
          </view>
        </view>
        <view class="para-info">
          <block v-for="(info,index) in detail" :key="index">
            <image :src="info.image" mode="widthFix"></image>
          </block>
        </view>
    </view>

    <view :class="['actionbgc',hide?'hide':'']" @click="upactionSheet"></view>
    <scroll-view scroll-y :class="['actionsheet',hide?'':'show']">
      <image src="/static/images/cancel.png" class="actcancel" @click="upactionSheet"></image>
      <view class="action_hd" >
        <image class="modImg" :src="image"></image>
        <view class="modText">
          <view class="modPrice">价格¥80.1</view>
          <view class="modSel">{{model}}</view>
        </view>
      </view>
      <view class="action_bd">
        <view class="tt">颜色</view>
        <view class="con">
          <radio-group class="weui-flex" @change="bindAmountChange">
            <label v-for="(item,index) in amounts" :key="index">
              <radio class="weui-check" :value="item.value"></radio>
              <view :class="['weui-check__label',item.checked?'checked':'']">
                <text>{{item.value}}</text>
              </view>
            </label>
          </radio-group>
        </view>
        <view class="tt">数量</view>
        <view class="con">
          <view class="drop" @click="dropNum">-</view>
          <view class="num">{{goodsNum}}</view>
          <view class="add" @click="addNum">+</view>
        </view>
      </view>
    </scroll-view>
    <view :class="['actionbgc',serHide?'hide':'']" @click="upactionSer"></view>
    <view :class="['actionsheet','actser',serHide?'':'show']">
      <view class="server_tit">服务</view>
      <scroll-view scroll-y class="scroll_server">
        <view class="server_content" v-for="(item,index) in server" :key="index">
          <view class="server content_tt">{{item.tit}}</view>
          <view class="content_se">{{item.content}}</view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<script>
  import detail from './recdata';
  import amounts from './buycardata';
  console.log('detail:',detail);
  console.log('amounts:',amounts);
    export default {
        data() {
            return {
              tuijian:[
                {
                  banner: 'http://pic11.photophoto.cn/20090525/0036036992793867_b.jpg',
                  title: '日式多功能颈枕 双扣款',
                  price: '¥69'
                },
                {
                  banner: 'http://pic11.photophoto.cn/20090525/0036036992793867_b.jpg',
                  title: '日式多功能颈枕 舒滑款',
                  price: '¥69'
                },
                {
                  banner: 'http://pic11.photophoto.cn/20090525/0036036992793867_b.jpg',
                  title: '旅行颈枕眼罩套装',
                  price: '¥53.1'
                },
                {
                  banner: 'http://pic11.photophoto.cn/20090525/0036036992793867_b.jpg',
                  title: '日式和风便携眼罩',
                  price: '¥29'
                },
                {
                  banner: 'http://pic11.photophoto.cn/20090525/0036036992793867_b.jpg',
                  title: '蒸汽热敷眼罩',
                  price: '¥49'
                }
              ],
              rexiao: [
                {
                  banner: 'http://pic11.photophoto.cn/20090525/0036036992793867_b.jpg',
                  title: '乳液按压分装瓶',
                  price: '¥9.9'
                },
                {
                  banner: 'http://pic11.photophoto.cn/20090525/0036036992793867_b.jpg',
                  title: '可裸睡纯棉便携睡袋',
                  price: '¥129'
                },
                {
                  banner: 'http://pic11.photophoto.cn/20090525/0036036992793867_b.jpg',
                  title: '杜邦纸旅行套装',
                  price: '¥99'
                },
                {
                  banner: 'http://pic11.photophoto.cn/20090525/0036036992793867_b.jpg',
                  title: '蒸汽热敷眼罩',
                  price: '¥49'
                }
              ],
              images:[
                {
                  url: 'http://pic11.photophoto.cn/20090525/0036036992793867_b.jpg',
                },
                {
                  url: 'http://pic11.photophoto.cn/20090525/0036036992793867_b.jpg',
                },
                {
                  url: 'http://pic11.photophoto.cn/20090525/0036036992793867_b.jpg',
                }
              ],
              server: [
                {
                  tit: '48小时快速退款',
                  content: '收到退货包裹并确认无误后，将在48小时内办理退款，退款将原路返回，不同银行处理时间不同，预计1-5个工作日到账。'
                },
                {
                  tit: '满88元免邮费',
                  content: '单笔订单金额（不含运费），大陆地区满88元免邮，不满88元收取10元邮费；港澳台地区满500元免邮，不满500元收取30元运费；海外地区以下单页提示运费为准。'
                },
                {
                  tit: '网易自营品牌',
                  content: '网易原创生活类电商品牌，所有商品均为网易自营，品质保证。'
                },
                {
                  tit: '免费配送到家',
                  content: '在该商品支持配送地区内，支持免费配送到家'
                },
                {
                  tit: '部分地区无法配送',
                  content: '不支持省份: 台湾、香港、澳门、新疆'
                }
              ],
              detail:detail,
              modNum: '',
              num: 1,
              current: 1,
              hide: true,
              serHide: true,
              amounts:amounts,
              image: '/static/images/lanmaomin.png',
              model:'',
              curIndex: 0,
              showtj: true,
              carNum: 0,
              lists:[]
            };
        },
        components: {},
        methods: {
          goBuy(e) {
            if (this.hide) {
              this.hide = false;
            }
            if (this.model) {
              wx.showToast({
                title: '购买成功',
              })
              this.hide = true;
            }


          },
          goCar(e) {
            wx.switchTab({
              url:"../../buycar/buycar",
              success: (res)=> {
                wx.setStorage({
                  key: 'carNum',
                  data: this.carNum
                })
              }
            })
          },

          addCar(e) {
            let num = this.num;
            let carNum = this.carNum;
            carNum +=num;
            if(this.model){
              wx.showToast({
                title: '加入购物车成功',
                icon: 'none'
              })
            }
            if(this.hide) {
              this.hide = false;
            }
            wx.setStorage({
              key: 'carNum',
              data: this.carNum
            })
            // app.globalData.carNum = this.data.carNum;
            num+=num;
            let temp ={
              title: '带帽日式多功能颈枕',
              price: '89.00',
              model: this.model,
              num: this.num,
              image: 'https://zll18314831310.github.io/wxapp_wangyiyanxuan/img/maozi2.png',
              selected: true,
              hasCarNum: this.carNum,
              isTouchMove: false
            }
            if(this.model) {
              const list = [
                temp,
                ...this.lists
              ]
              this.lists = list;
            }

            wx.setStorage({
              key: 'lists',
              data: this.lists
            })
            console.log(this.lists)
          },

          switchCategory(e) {
            console.log(e)
            let index = e.currentTarget.dataset.index;
            if(index==0) {
              this.showtj = true;
            }else {
              this.showtj = false;
            }
            this.curIndex = e.currentTarget.dataset.index?e.currentTarget.dataset.index:0;
          },

          bindAmountChange(e) {
            // console.log(e)
            let amounts = this.amounts;
            let strVal = e.mp.detail.value;
            for(let amount of amounts) {
              amount.checked = amount.value ==strVal;
              // console.log(amount)
              if(amount.checked==true) {
                this.image = amount.image;
              }
            }
            this.model = '已选择：'+strVal;
          },

          changeSwiper(e) {
            console.log('e:',e);
            var current = e.mp.detail.current+1;
            this.current = current;
          },

          actionSheet(e) {
            this.hide = false;
          },

          upactionSheet(e) {
            if(this.model) {
              this.modNum = '*'+this.num;
            }
            this.hide = true
          },

          actionSer(e) {
            this.serHide = false;
          },

          upactionSer(e) {
            this.serHide = true
          },

          dropNum(e) {
            let num = this.num;
            let model = this.model;
            let modNum = this.modNum;
            num--;
            if(num<1) {
              wx.showToast({
                title: '必须买一件',
                icon: 'none'
              })
              num=1;
            }
          },

          addNum(e) {
            let num = this.num;
            let modNum = this.modNum;
            let model = this.model;
            num++;
          },
        },
        created() {
        }
    }
</script>
<style scoped>
    @import 'index.wxss';
</style>
