<template>
  <div class="gauge-enemy">
    <div class="gauges">
      <Character v-bind:character=enemy />
      <div class="gauge">
        <Gauge v-bind:hp=enemy.hp />
      </div>
    </div>
  </div>
</template>

<script>
import Character from '@/components/Character.vue'
import Gauge from '@/components/Gauge.vue'
export default {
  components: { Character, Gauge },
  computed: {
    enemy() { return this.$store.getters['battle/enemy'] }
  }
}
</script>

<style lang="scss">
.gauge-enemy{
  grid-area: gauge1;
  height: 100%;
  position: relative;
  .gauges {
    width: 95%;
    height: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 30px 1fr;
    .gauge {
      position: relative;
      border-bottom: 3px solid #333;
      border-radius: 0 0 0 15px;
      border-left: 10px solid #333;
      &:after {
        content: "";
        position: absolute;
        bottom: -3px;
        right: -10px;
        border-top: 5px solid transparent;
        border-left: 10px solid #333;
        border-bottom: 5px solid #333;
        border-right: 10px solid transparent;
      }
    }
  }
}
</style>
