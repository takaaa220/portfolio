export default {
  namespaced: true,
  state: {
    message: "あ! やせいの<br>Web がとびだしてきた!",
    battleState: 0,
    commandShow: false,
    nextShow: true,
    me: { name: "ひらた♂ ", lv: "22", hp: 3, img: 'man.png' },
    enemy: { name: "Web", lv: "100", hp: 0, img: 'web.svg' },
    commands: [
      { id: 1, name: "わたし",
        msg: "だいがくいんをきゅうがくちゅう<br>とうきょうにすんでいます"},
      { id: 2, name: "ぎじゅつ",
        msg: "Ruby Python C++ Vue React<br>をべんきょうしてます" },
      { id: 3, name: "しごと",
        msg: "さくせいちゅうです<br>もうちょっとまってね" },
      { id: 4, name: "れんらく",
        msg: "Twitter→<a href='https://twitter.com/taketakepro'>taketakepro</a><br>Github→<a href='https://github.com/takaaa220/'>takaaa220</a>" }
    ]
  },
  getters: {
    message(state) { return state.message },
    battleState(state) { return state.battleState },
    commandShow(state) { return state.commandShow },
    nextShow(state) { return state.nextShow },
    me(state) { return state.me },
    enemy(state) { return state.enemy },
    commands(state) { return state.commands }
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message
    },
    setMeImg(state, payload) {
      state.me.img = payload.me.img
    },
    setCommands(state, payload) {
      state.commands = payload.commands
    },
    setNextShow(state, payload) {
      state.nextShow = payload.nextShow
    },
    setCommandShow(state, payload) {
      state.commandShow = payload.commandShow
    },
    setBattleState(state, payload) {
      state.battleState = payload.battleState
    }
  },
  actions: {
    doCommandMode({ commit }) {
      commit('setMessage', { message: ""}),
      commit('setCommandShow', { commandShow: true }),
      commit('setNextShow', { nextShow: false }),
      commit('setBattleState', { battleState: 5})
    },
    doMessageMode({ commit }, message) {
      commit('setMessage', { message }),
      commit('setCommandShow', { commandShow: false}),
      commit('setNextShow', { nextShow: true })
    },
    doUpdateCommands({ commit }, commands) {
      commit('setCommands', { commands })
    },
    doNextState1({ commit }){
      commit('setMessage', { message: "ゆけ! <br>ひらた!"}),
      // commit('setCommandShow', { commandShow: true}),
      commit('setNextShow', { nextShow: true}),
      commit('setBattleState', { battleState: 2})
    },
    doNextState2({ commit }){
      commit('setMeImg', { me: { img: 'takashi.png'}})
      commit('setBattleState', { battleState: 3})
    }
  }
}
