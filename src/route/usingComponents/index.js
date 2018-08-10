const iview = {
  'i-button': '/libs/iview/button/index',
  'i-panel': '/libs/iview/panel/index',
  'i-notice-bar': '/libs/iview/notice-bar/index',
  'i-card': '/libs/iview/card/index',
  'i-avatar': "/libs/iview/avatar/index",
};


const zanUI = {
  'zan-search': '/libs/zanUI/search/index',
  'zan-cell': '/libs/zanUI/cell/index',
  'zan-cell-group': '/libs/zanUI/cell-group/index',
  'zan-row': '/libs/zanUI/row/index',
  'zan-col': '/libs/zanUI/col/index',
  'zan-icon': '/libs/zanUI/icon/index',
  'zan-button': '/libs/zanUI/btn/index',
  'zan-loadmore': '/libs/zanUI/loadmore/index',
}


const  commonUI= {
  ...iview,...zanUI
};

module.exports =  commonUI;
