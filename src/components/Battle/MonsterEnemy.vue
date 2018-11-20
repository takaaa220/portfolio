<template>
  <div class="monster-enemy">
    <transition name="enemy" appear v-if="battleState==0">
      <img v-bind:src=img>
    </transition>
    <img v-bind:src=img v-else>
  </div>
</template>

<script>
import imgReadMixin from '@/mixins/imgReadMixin.js'
export default {
  mixins: [ imgReadMixin ],
  computed: {
    character() { return this.$store.getters['battle/enemy']},
    battleState() { return this.$store.getters['battle/battleState'] }
  }
}
</script>

<style lang="scss">
.enemy-enter-active {
  transition: transform 1s, opacity 1s;
}
.enemy-leave-active {
  position: absolute;
}
.enemy-enter {
  transform: translateX(-300px);
  opacity: 0;
}
.monster-enemy {
  position: relative;
  grid-area: monster1;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    // object-fit: cover;
    border-radius: 50%;
  }
}
</style>
