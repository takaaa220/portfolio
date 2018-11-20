<template>
    <transition name="me" appear v-if=appear>
      <div class="monster-me">
        <img v-bind:src=img>
      </div>
    </transition>
    <div class="monster-me" v-else>
      <img v-bind:src=img>
    </div>
  </div>
</template>

<script>
import imgReadMixin from '@/mixins/imgReadMixin.js'
export default {
  mixins: [ imgReadMixin ],
  computed: {
    character() { return this.$store.getters['battle/me']},
    appear() { return this.$store.getters['battle/appear'] }
  },
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
  width: 60%;
  height: 100%;
  margin: 0 auto;
  border-radius: 50%;
  background-color: black;
  img {
    opacity: .75;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>
