<template>
  <div class="monster-enemy">
    <transition name="enemy" appear>
      <img v-bind:src=img>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require('../assets/images/web.svg')
    }
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
  }
}
</style>
