<template>
  <div class="gauge-me">
    <div class="gauges">
      <Character v-bind:character=character />
      <div class="gauge">
        <Gauge v-bind:hp=character.hp />
      </div>
    </div>
  </div>
</template>

<script>
import Character from "@/components/Shared/Character.vue"
import Gauge from '@/components/Shared/Gauge.vue'
import imgReadMixin from '@/mixins/imgReadMixin.js'
export default {
  components: { Character, Gauge },
  mixins: [ imgReadMixin ],
  computed: {
    character() { return this.$store.getters['battle/me'] }
  }
}
</script>

<style lang="scss">
.gauge-me {
  position: relative;
  grid-area: gauge2;
  height: 100%;
  .gauges {
    position: absolute;
    bottom: 0;
    width: 95%;
    height: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 30px 1fr;
    .gauge {
      position: relative;
      border-bottom: 3px solid #333;
      border-radius: 0 0 15px 0;
      border-right: 10px solid #333;
      &:after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: -10px;
        border-top: 5px solid transparent;
        border-left: 10px solid transparent;
        border-bottom: 5px solid #333;
        border-right: 10px solid #333;
      }
    }
  }
}
</style>
