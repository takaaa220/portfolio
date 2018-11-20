export default {
  namespaced: true,
  state: {
    message: "あ! やせいの<br>Web がとびだしてきた!",
    battleState: 0,
    commandShow: false,
    nextShow: true,
    gaugeShow: false,
    monsterShow: true,
    serifShow: false,
    commands: [
      { id: 1, name: "わたし",
        msg: "だいがくいんをきゅうがくちゅう<br>とうきょうにすんでいます"},
      { id: 2, name: "ぎじゅつ",
        msg: "Ruby Python C++ Vue React<br>をべんきょうしてます" },
      { id: 3, name: "しごと",
        msg: "さくせいちゅうです<br>もうちょっとまってね" },
      { id: 4, name: "れんらく",
        msg: "Twitter→<a href='https://twitter.com/taketakepro'>taketakepro</a><br>Github→<a href='https://github.com/takaaa220/'>takaaa220</a>" }
    ],
    me: { name: "ひらた♂ ", lv: "22", hp: 3, img: 'man.png' },
    enemy: { name: "Web", lv: "100", hp: 0, img: 'web.svg' }
  },
  getters: {
    message(state) { return state.message },
    battleState(state) { return state.battleState },
    commandShow(state) { return state.commandShow },
    nextShow(state) { return state.nextShow },
    gaugeShow(state) { return state.gaugeShow },
    monsterShow(state) { return state.monsterShow },
    serifShow(state) { return state.serifShow },
    commands(state) { return state.commands },
    me(state) { return state.me },
    enemy(state) { return state.enemy }
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message
    },
    setMeImg(state, payload) {
      state.me.img = payload.me.img
    },
    setCommandShow(state, payload) {
      state.commandShow = payload.commandShow
    },
    setCommands(state, payload) {
      state.commands = payload.commands
    },
    setGaugeShow(state, payload) {
      state.gaugeShow = payload.gaugeShow
    },
    setNextShow(state, payload) {
      state.nextShow = payload.nextShow
    },
    setMonsterShow(state, payload) {
      state.monsterShow = payload.monsterShow
    },
    setCommandsShow(state, payload) {
      state.commandsShow = payload.commandsShow
    },
    setSerifShow(state, payload) {
      state.serifShow = payload.serifShow
    },
    setBattleState(state, payload) {
      state.battleState = payload.battleState
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
      commit('setGaugeShow', { gaugeShow: true}),
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
      commit('setCommandsShow', { commandsShow: true}),
      commit('setNextShow', { nextShow: true}),
      commit('setBattleState', { battleState: 2})
    },
    doNextState2({ commit }){
      commit('setMeImg', { me: { img: 'takashi.png'}})
      commit('setBattleState', { battleState: 3})
    }
  }
}
