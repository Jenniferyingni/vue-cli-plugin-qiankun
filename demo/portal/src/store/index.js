import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用户信息
    userInfo:{
      userName:'admin',
      userId:'12324'
    },
    // 其他要传递的数据
    micro:{
      name:'micro1',
      data:{
        id:'1',
        url:'http://1111'
      }
    }
  },
  mutations: {},
  actions: {
    setMicro({state},data){
      state.micro = data
    }
  },
  modules: {},
});
