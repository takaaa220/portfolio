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
  bottom: -20px;
  right: 20px;
  // background-color: #fff;
  border: 20px solid transparent;
  border-top: 20px solid #333;
  animation: flash 1s ease-in-out infinite;
  &:hover {
    cursor: pointer;
  }
}
</style>
