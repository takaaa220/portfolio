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
    grid-template-rows: 3rem 1fr;
    .gauge {
      position: relative;
      border-bottom: .3rem solid #333;
      border-radius: 0 0 1.5rem 0;
      border-right: 1rem solid #333;
      &:after {
        content: "";
        position: absolute;
        bottom: -0.3rem;
        left: -1rem;
        border-top: .5rem solid transparent;
        border-left: 1rem solid transparent;
        border-bottom: .5rem solid #333;
        border-right: 1rem solid #333;
      }
    }
  }
}
</style>
