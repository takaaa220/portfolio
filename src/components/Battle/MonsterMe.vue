<template>
    <div class="monster-me">
      <transition name="me" v-on:after-leave="afterLeave" appear>
        <img v-bind:src=img v-if="[0,1,2].includes(battleState)">
      </transition>
      <transition name="appear" appear mode="out-in">
        <img v-bind:src=img v-if="battleState==4">
      </transition>
      <img v-bind:src=img v-if="battleState==5">
    </div>
  </div>
</template>

<script>
import imgReadMixin from '@/mixins/imgReadMixin.js'
export default {
  mixins: [ imgReadMixin ],
  computed: {
    character() { return this.$store.getters['battle/me']},
    battleState() { return this.$store.getters['battle/battleState'] }
  },
  methods: {
    afterLeave() {
      this.$store.commit('battle/setBattleState', { battleState: 4})
    }
  }
}
</script>

<style lang="scss">
.me-enter-active, .me-leave-active {
  transition: transform 1s, opacity 1s;
}
.me-enter {
  transform: translateX(300px);
  opacity: 0;
}
.me-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
.appear-enter-active {
  transition: transform 1s ease-in-out;
}
.appear-enter {
  transform: scale(0);
}
 .appear-leave-active{
  position: absolute;
}
.monster-me {
  position: relative;
  grid-area: monster2;
  width: 60%;
  height: 100%;
  margin: 0 auto;
  border-radius: 50%;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>
