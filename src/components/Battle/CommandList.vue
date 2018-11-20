<template>
  <div class="command">
    <div class="wrapper">
      <Command v-for='cmd in commands' v-bind:cmd=cmd />
    </div>
  </div>
</template>

<script>
import Command from '@/components/Battle/Command.vue'
export default {
  name: "CommandList",
  components: {
    Command
  },
  computed: {
    commands() { return this.$store.getters['battle/commands'] }
  }
}
</script>

<style lang="scss">
.command {
  position: absolute;
  top: -0.5rem;
  right: -0.2rem;
  width: 25rem;
  height: 15rem;
  padding: .2rem;
  border-radius: 1rem;
  border: .2rem solid #333;
  box-shadow: 0 0 1rem #fff;
  background-color: #fff;
  .wrapper {
    display: grid;
    padding: 2rem 1rem;
    font-size: 2.4rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
