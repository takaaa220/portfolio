const _commands = [
  [
    { id: 1, name: "わたし",
      msg: "だいがくいんをきゅうがくちゅう<br>とうきょうにすんでいます"},
    { id: 2, name: "ぎじゅつ",
      msg: "Ruby Python C++ Vue React<br>をべんきょうしてます" },
    { id: 3, name: "しごと",
      msg: "さくせいちゅうです<br>もうちょっとまってね" },
    { id: 4, name: "れんらく",
      msg: "Twitter→<a href='https://twitter.com/taketakepro'>taketakepro</a><br>Github→<a href='https://github.com/takaaa220/'>takaaa220</a>" }
  ],
  [
    { id: 1, name: "せつめい",
      msg: "だいがくいんをきゅうがくちゅう<br>とうきょうにすんでいます"
    },
    { id: 2, name: "しゅみ",
      msg: "アニメとりょうりにはまっています<br>たのしい！"
    },
    { id: 3, name: "どこから",
      msg: "おおさかです<br>みえとならにもすんでいました"
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
