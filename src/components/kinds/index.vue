<template>
    <div class="mContainer">
      <view class="main">
        <scroll-view class="menu-left" scroll-y :scroll-with-animation="true">
          <view :class="['cate-list',curIndex==index?'on':'off']" @tap="switchCategory" v-for="(item, index) in kindsProp.menu" :index="item.id" :key="item.id" :data-id="item.id" :data-index="index" >
              <text>{{item.name}}</text>
          </view>
        </scroll-view>
        <swiper vertical="true" class="menu-right" :current="toView" >
          <swiper-item v-for="(item, index) in kindsProp.detail" :index="item.id" :key="item.id">
            <scroll-view class="cate-box" :id="item.id" scroll-y>
              <view class="cate-banner" @tap="bannerDetails">
                <image :src="item.banner"></image>
              </view>
              <view class="cate-title">
                <text>{{item.title}}</text>
              </view>
              <view class="cate-product">
                <view class="product-list" @tap="productDetails" v-for="(product, productIndex) in item.productList" :key="productIndex" >
                  <image :src="product.thumb"></image>
                  <view class="product-list-name">
                    <text>{{product.name}}</text>
                  </view>
                </view>
              </view>
            </scroll-view>
          </swiper-item>
        </swiper>
      </view>
    </div>
</template>
<script>
    export default {
        props: {
          kindsProp: {
            type: Object,
            default: function () {
              return {
                menu: [
                  {name:'推荐专区',id:'tuijian'},
                  {name:'夏季专区',id:'xiaji'},
                  {name:'个性专区',id:'gexing'},
                  {name:'居家',id:'jujia'},
                  {name:'配件',id:'peijian'},
                  {name:'服装',id:'fuzhuang'},
                  {name:'电器',id:'dianqi'},
                  {name:'洗护',id:'xihu'},
                  {name:'饮食',id:'yinshi'},
                  {name:'餐厨',id:'canchu'},
                  {name:'婴童',id:'yingtong'},
                  {name:'文体',id:'wenti'},
                  {name:'特色区',id:'tese'}
                ],
                detail: []
              };
            }
          },
        },
        data() {
            return {
              curIndex: 0,
              toView:0,
            };
        },
        components: {},
        computed:{
//          hoverClass:function (index) {
//            console.log('index:',index)
//            return 'cate-list '+ this.curIndex==index?'on':'';
//          }
        },
        methods: {
          switchCategory(e){
            this.curIndex = e.currentTarget.dataset.index?e.currentTarget.dataset.index:0;
            this.toView=e.currentTarget.dataset.index;
          },
          productDetails(e) {
            console.log("e:",e);
            this.$emit('itemDetail', e);
          },
          bannerDetails(e) {
            this.$emit('bannerDetail', e);
          },
        },
        created() {
        }
    }
</script>
<style scoped>
    @import 'index.wxss';

    .container {
    }
</style>
