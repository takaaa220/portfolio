<template>
  <div class="monster-me">
    <transition name="me" appear>
      <img v-bind:src=img>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    appear() { return this.$store.getters['battle/appear'] }
  },
  data() {
    return {
      img: require('../assets/images/takashi.png')
    }
  },
  mounted() {
    this.$store.commit('battle/setAppear', { appear: false })
  }
}
</script>

<style lang="scss">
.me-enter-active, .me-leave-active {
  transition: transform .5s, opacity .8s;
}
.me-enter, .me-leave-to {
  transform: scale(0, 0);
  opacity: 0;
}
.monster-me {
  grid-area: monster2;
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
