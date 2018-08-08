<template>
  <div>
    <div class="imageContainer">
      <image :src="myProp.groupImage"></image>
      <view >{{myProp.groupTitle}}</view>
    </div>
    <view>{{myProp.title}}</view>
    <div>
      <view>{{myProp.groupFormat}}</view>
      <view>{{myProp.goupPrice}}</view>
    </div>
    <div>
      <view>单买价</view>
      <view>{{myProp.singlePrice}}</view>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['groupImageProp','groupTitleProp','groupFormatProp','titleProp','groupPriceProp','singlePriceProp'],
    data() {
      return {
        myProp:{
          groupImage: this.groupImageProp,
          groupTitle: this.groupTitleProp,
          groupFormat: this.groupFormatProp,
          title: this.titleProp,
          groupPrice: this.groupPriceProp,
          singlePrice: this.singlePriceProp
        }
      };
    }
  }
</script>
<style scoped>

</style>
