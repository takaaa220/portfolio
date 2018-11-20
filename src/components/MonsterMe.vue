<template>
  <div class="monster-me">
    <transition name="me" appear>
      <div class="monster">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    appear() { return this.$store.getters['battle/appear'] }
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
  .monster {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    background: transparent url('./../assets/images/takashi.png') no-repeat center center;
    background-size: 60%;
    border-radius: 50%;
  }
}
</style>
