<template>
  <div class="container">
    <div class="imageContainer">
      <image class="imageBox" mode="scaleToFill" :src="myProp.groupImage"></image>
      <view class="zan-font-12">{{myProp.groupProgress}}</view>
    </div>
    <view class="zan-font-14">{{myProp.title}}</view>
    <div>
      <view class="zan-font-12">{{myProp.groupFormat}}</view>
      <view class="zan-font-12">{{myProp.groupPrice}}</view>
    </div>
    <div>
      <view class="zan-font-12">单买价</view>
      <view class="zan-font-12">{{myProp.singlePrice}}</view>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      showProp: {
        type: Object,
        default: function () {
          return {
            groupImage:'https://i.loli.net/2017/08/21/599a521472424.jpg',
            groupProgress:'84人已团',
            groupFormat:'2人团',
            title:'免费试用|创作7年，更懂男人的男人袜',
            groupPrice:'$0.01',
            singlePrice:'$22.00'
          };
        }
      },
    },
    data() {
      return {
        myProp:this.showProp
      };
    }
  }
</script>
<style>
.container{
}
.imageBox{
  width: 200rpx;
  height: 200rpx;
}
.imageContainer{

}
</style>
