const _commands = [
  [
    { id: 1, name: "わたし",
      msg: "だいがくいんをきゅうがくちゅう とうきょうにすんでいます"},
    { id: 2, name: "ぎじゅつ",
      msg: "Ruby Python C++ Vue Reactをべんきょうしてます" },
    { id: 3, name: "しごと",
      msg: "Ruby Reactをつかってインターンちゅうです" },
    { id: 4, name: "れんらく",
      msg: "Twitter taketakepro におねがいします" }
  ],
  [
    { id: 1, name: "せつめい",
      msg: "だいがくいんをきゅうがくちゅう とうきょうにすんでいます"
    },
    { id: 2, name: "しゅみ",
      msg: "アニメとりょうりにはまっています たのしい！"
    },
    { id: 3, name: "どこから",
      msg: "おおさかです みえとならにもすんでいました"
    },
    { id: 4, name: "もどる" }
  ]
]

export default {
  data() {
    return {
      commands: _commands,
    }
  }
}
