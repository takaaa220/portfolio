<template>
  <div class="battle">
    <GaugeEnemy v-show="battleState==5" />
    <MonsterEnemy />
    <MonsterMe />
    <GaugeMe v-show="battleState==5" />
    <Serif v-show="battleState!=0"/>
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
  created() {
    if (this.battleState == 0){
      setTimeout(() => {
        this.$store.commit('battle/setBattleState', { battleState: 1})
      }, 2000)
    }
  },
  computed: {
    battleState() { return this.$store.getters['battle/battleState']}
  }
}
</script>

<style lang="scss">
.battle {
  display: grid;
  grid-gap: .5rem;
  grid-template-rows: 13rem 13rem 14rem;
  grid-template-columns: 24rem 2rem 24rem;
  grid-template-areas:
        "gauge1 gauge1 monster1"
        "monster2 gauge2 gauge2"
        "serif serif serif";
}
</style>
