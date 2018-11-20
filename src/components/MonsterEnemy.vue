<template>
  <div class="monster-enemy">
    <transition name="enemy" appear v-if=appear>
      <img v-bind:src=me.img>
    </transition>
    <img v-bind:src=img v-else>
  </div>
</template>

<script>
export default {
  computed: {
    me() { return this.$store.getters['battle/enemy']},
    appear() { return this.$store.getters['battle/appear'] }
  }
}
</script>

<style lang="scss">
.enemy-enter-active, .enemy-leave-active {
  transition: transform .5s, opacity 1s;
}
.enemy-enter, .enemy-leave-to {
  transform: scale(0, 0);
  opacity: 0;
}
.monster-enemy {
  grid-area: monster1;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>
