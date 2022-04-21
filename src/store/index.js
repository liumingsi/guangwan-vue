import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openid: sessionStorage.getItem('openid') || '',
    code: sessionStorage.getItem('code') || '',
    iddata:null,
  },
  mutations: {
    setOpenid (state, openid) {
      sessionStorage.setItem('openid', openid)
      state.openid = openid
    },
    setCode (state, code) {
      sessionStorage.setItem('code', code)
      state.code = code
    },
   
  },
  actions: {
  
  }
})
