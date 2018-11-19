export default {
  namespaced: true,
  state: {
    characters: [
      {
        id: 1, name: "Ruby", lv: "10", hp: 0, img: require('../assets/images/ruby.jpg'), type: "たのしい",
        msg: "おもにRailsをつかってます インターンでもつかってます"
      },
      {
        id: 2, name: "Python", lv: "20", hp: 1, img: require('../assets/images/python.jpeg'), type: "すき",
        msg: "けんきゅうでつかってました きかいがくしゅうむずかしい"
       },
      {
        id: 3, name: "C++", lv: "20", hp: 3, img: require('../assets/images/c.png'), type: "わからない",
        msg: "じゅぎょうでつかってました むずかしい"
      },
      {
        id: 4, name: "Vue", lv: "2", hp: 1, img: require('../assets/images/vue.png'), type: "たのしい",
        msg: "フロントもやりたくてべんきょうしています このサイトもVueつかってます"
      },
      {
        id: 5, name: "React", lv: "2", hp: 4, img: require('../assets/images/react.png'), type: "むずかしい",
        msg: "インターンさきでつかうのでべんきょうちゅう むずかしい"
     }
    ]
  },
  getters: {
    characters(state) { return state.characters }
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload.characters
    }
  },
  actions: {
    doUpdateCharacters({ commit }, characters) {
      commit('setCharacters', { characters })
    }
  }
}
