<template>
  <div class="serif-next" v-on:click="push()"></div>
</template>

<script>
export default {
  name: "SerifNext",
  methods: {
    push: function() {
      this.$store.dispatch("battle/doCommandMode")
    }
  }
}
</script>

<style lang="scss">
@keyframes flash {
  50% {opacity: 0;}
}
.serif-next {
  position: absolute;
  bottom: -2rem;
  right: 2rem;
  // background-color: #fff;
  border: 2rem solid transparent;
  border-top: 2rem solid #333;
  animation: flash 1s ease-in-out infinite;
  &:hover {
    cursor: pointer;
  }
}
</style>
