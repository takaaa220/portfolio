<template>
  <div class="battle">
    <GaugeEnemy v-show="gaugeShow" />
    <MonsterEnemy />
    <MonsterMe />
    <GaugeMe v-show="gaugeShow" />
    <Serif />
  </div>
</template>

<script>
import GaugeEnemy from '@/components/Battle/GaugeEnemy.vue'
import GaugeMe from '@/components/Battle/GaugeMe.vue'
import MonsterEnemy from '@/components/Battle/MonsterEnemy.vue'
import MonsterMe from '@/components/Battle/MonsterMe.vue'
import Serif from '@/components/Battle/Serif.vue'
export default {
  name: "Battle",
  components: {
    GaugeEnemy, GaugeMe, MonsterEnemy, MonsterMe, Serif
  },
  computed: {
    gaugeShow() { return this.$store.getters['battle/gaugeShow']}
  }
}
</script>

<style lang="scss">
.battle {
  display: grid;
  grid-gap: 5px;
  grid-template-rows: 130px 130px 140px;
  grid-template-columns: 240px 20px 240px;
  grid-template-areas:
        "gauge1 gauge1 monster1"
        "monster2 gauge2 gauge2"
        "serif serif serif";
}
</style>
