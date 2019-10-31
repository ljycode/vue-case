export default {
  // namespaced: true, // 开启模块
  state: {
    userName: 'fe', // 前端
  },
  getters: {
    getUserName(state) {
      return `${state.userName}is great`;
    },
  },
  actions: {
    // actions中可多次触发mutations
    change_uname({ commit }, payload) {
      setTimeout(() => {
        commit('change_uname', payload);
      }, 2000);
      setTimeout(() => {
        commit('change_uname', 'awei');
      }, 2000);
    },
  },
  mutations: {
    // 修改值，第二个参数为新的值
    change_uname(state, payload) {
      state.userName = payload;
    },
  },
};

// user模块的状态管理
