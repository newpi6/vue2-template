const state = {
  active_module: ''
}

const mutations = {
  CHANGE_MODULE: (state, module) => {
    state.active_module = module
  }
}

const actions = {
  changeModule({ commit }, data) {
    commit('CHANGE_MODULE', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
