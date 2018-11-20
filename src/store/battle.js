export default {
  namespaced: true,
  state: {
    message: "あ！ やせいの Web が とびだしてきた！",
    commandShow: false,
    nextShow: true,
    gaugeShow: false,
    appear: true,
    commands: [
      { id: 1, name: "わたし",
        msg: "だいがくいんをきゅうがくちゅう とうきょうにすんでいます"},
      { id: 2, name: "ぎじゅつ",
        msg: "Ruby Python C++ Vue Reactをべんきょうしてます" },
      { id: 3, name: "しごと",
        msg: "Ruby Reactをつかってインターンちゅうです" },
      { id: 4, name: "れんらく",
        msg: "Twitter taketakepro におねがいします" }
    ],
    me: { name: "ひらた♂ ", lv: "22", hp: 3, img: require('../assets/images/takashi.png') },
    enemy: { name: "Web", lv: "100", hp: 0, img: require('../assets/images/ohnishi.jpg') }
  },
  getters: {
    message(state) { return state.message },
    appear(state) { return state.appear },
    commandShow(state) { return state.commandShow },
    nextShow(state) { return state.nextShow },
    gaugeShow(state) { return state.gaugeShow },
    commands(state) { return state.commands },
    me(state) { return state.me },
    enemy(state) { return state.enemy }
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message
    },
    setAppear(state, payload) {
      state.appear = payload.appear
    },
    setCommandShow(state, payload) {
      state.commandShow = payload.commandShow
    },
    setNextShow(state, payload) {
      state.nextShow = payload.nextShow
    },
    setGaugeShow(state, payload) {
      state.gaugeShow = payload.gaugeShow
    },
    setCommands(state, payload) {
      state.commands = payload.commands
    }
  },
  actions: {
    doUpdateMessage({ commit }, message) {
      commit('setMessage', { message } ),
      commit('setNextShow', { nextShow: true })
    },
    doCommandMode({ commit }) {
      commit('setMessage', { message: ""}),
      commit('setCommandShow', { commandShow: true }),
      commit('setNextShow', { nextShow: false }),
      commit('setGaugeShow', { gaugeShow: true})
    },
    doMessageMode({ commit }, message) {
      commit('setMessage', { message }),
      commit('setCommandShow', { commandShow: false}),
      commit('setNextShow', { nextShow: true })
    },
    doUpdateCommands({ commit }, commands) {
      commit('setCommands', { commands })
    }
  }
}
