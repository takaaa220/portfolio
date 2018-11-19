<template>
  <div class="cmd" v-if='cmd.name=="ぎじゅつ"'>
    <router-link to="/bag">{{ cmd.name }}</router-link>
  </div>
  <div class="cmd" v-on:click="push(cmd)" v-else>
    {{ cmd.name }}
  </div>
</template>

<script>
export default {
  props: [
    'cmd'
  ],
  methods: {
    push: function(cmd) {
      if(cmd.name == "ぎじゅつ") {
        console.log("ぎじゅつ")
      }
      else if (cmd.name == "わたし") {
        var commands = [
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
        this.$store.dispatch("battle/doUpdateCommands", commands)
      }
      else if (cmd.name == "もどる") {
        var commands = [
          { id: 1, name: "わたし",
            msg: "だいがくいんをきゅうがくちゅう とうきょうにすんでいます"},
          { id: 2, name: "ぎじゅつ",
            msg: "Ruby Python C++ Vue Reactをべんきょうしてます" },
          { id: 3, name: "しごと",
            msg: "Ruby Reactをつかってインターンちゅうです" },
          { id: 4, name: "れんらく",
            msg: "Twitter: taketakepro におねがいします" }
        ]
        this.$store.dispatch("battle/doUpdateCommands", commands)
      }
      else {
        this.$store.dispatch("battle/doMessageMode", cmd.msg)
      }
    }
  }
}
</script>

<style lang="scss">
@keyframes flash {
  50% {opacity: 0;}
}
.cmd {
  &:hover {
    animation: flash .7s ease-in-out infinite;
    cursor: pointer;
  }
}
</style>
