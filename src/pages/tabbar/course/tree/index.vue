<template>
  <div class="mContainer">
    <zan-search
      :searchStyle="search.searchStyle"
      :inputStyle="search.inputStyle"
      :keyword="search.inputValue"
      :placeholder="search.placeholder"
    />
    <zan-tree-select
      class="fragment"
      :items="items"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      @navclick="handleNavClick"
      @itemclick="handleItemClick"
    />

  </div>
</template>
<script>
  export default {
    data () {
      return {
        search:{
          inputValue:'',
          placeholder:'请输入想要查找课程',
          searchStyle: "height: 88rpx; padding: 0 30rpx; background:#F2F2F2;",
          inputStyle:"height: 56rpx; border-radius: 8rpx;"
        },
        activeId:1002,
        mainActiveIndex:0,
        items:[
          {
            // 导航名称
            text: '流行舞蹈',
            // 该导航下所有的可选项
            children: [
              {
                // 可选项的名称
                text: '流行舞蹈01',
                // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
                id: 1022
              },
              {
                // 可选项的名称
                text: '流行舞蹈02',
                // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
                id: 1021
              }
            ]
          },
          {
            // 导航名称
            text: '芭蕾舞',
            // 该导航下所有的可选项
            children: [
              {
                // 可选项的名称
                text: '芭蕾舞01',
                // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
                id: 1002
              },
              {
                // 可选项的名称
                text: '芭蕾舞02',
                // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
                id: 1001
              }
            ]
          },
          {
            // 导航名称
            text: '古典舞',
            // 该导航下所有的可选项
            children: [
              {
                // 可选项的名称
                text: '古典舞01',
                // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
                id: 1012
              },
              {
                // 可选项的名称
                text: '古典舞02',
                // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
                id: 1011
              }
            ]
          }
        ]
      };
    },
    components: {

    },
    methods:{
      handleNavClick(e){
        console.log('handleNavClick:',e)
        this.mainActiveIndex = e.mp.detail.index || 0
      },
      handleItemClick(e){
        console.log('handleItemClick:',e)
        this.activeId = e.mp.detail.id
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
    created () {}
  }
</script>
<style scoped>
  @import 'index.css';
  .container{
  }
</style>
