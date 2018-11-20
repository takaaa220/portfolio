export default {
  namespaced: true,
  state: {
    characters: [
      {
        id: 1, name: "Ruby", lv: "10", hp: 0, img: 'ruby.jpg', type: "たのしい",
        msg: "おもにRailsをつかってます<br>インターンでもつかってます"
      },
      {
        id: 2, name: "Python", lv: "20", hp: 1, img: 'python.jpeg', type: "すき",
        msg: "けんきゅうでつかってました<br>きかいがくしゅうむずかしい"
       },
      {
        id: 3, name: "C++", lv: "20", hp: 3, img: 'c.png', type: "わからない",
        msg: "じゅぎょうでつかってました<br>むずかしい"
      },
      {
        id: 4, name: "Vue", lv: "2", hp: 1, img: 'vue.png', type: "たのしい",
        msg: "フロントもやりたくてべんきょうちゅう<br>このサイトもVueつかってます"
      },
      {
        id: 5, name: "React", lv: "2", hp: 4, img: 'react.png', type: "むずかしい",
        msg: "インターンさきでつかうので<br>べんきょうちゅう むずかしい"
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
