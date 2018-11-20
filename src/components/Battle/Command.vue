<template>
  <div class="cmd" v-if='cmd.name=="ぎじゅつ"'>
    <router-link to="/bag">{{ cmd.name }}</router-link>
  </div>
  <div class="cmd" v-on:click="push()" v-else>
    {{ cmd.name }}
  </div>
</template>

<script>
import commandsMixin from '@/mixins/commandsMixin.js'
export default {
  props: [
    'cmd'
  ],
  mixins: [
    commandsMixin
  ],
  methods: {
    push: function() {
      if(this.cmd.name == "ぎじゅつ") {
        console.log("ぎじゅつ")
      }
      else if (this.cmd.name == "わたし") {
        this.$store.dispatch("battle/doUpdateCommands", this.commands[1])
      }
      else if (this.cmd.name == "もどる") {
        this.$store.dispatch("battle/doUpdateCommands", this.commands[0])
      }
      else {
        this.$store.dispatch("battle/doMessageMode", this.cmd.msg)
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
