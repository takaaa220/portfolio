<template>
  <div class="command">
    <div class="wrapper">
      <Command v-for='cmd in commands' v-bind:cmd=cmd />
    </div>
  </div>
</template>

<script>
import Command from '@/components/Command.vue'
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
  top: -5px;
  right: -2px;
  width: 250px;
  height: 150px;
  padding: 2px;
  border-radius: 10px;
  border: 2px solid #333;
  box-shadow: 0 0 10px #fff;
  background-color: #fff;
  .wrapper {
    display: grid;
    padding: 20px 10px;
    font-size: 2.4rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
