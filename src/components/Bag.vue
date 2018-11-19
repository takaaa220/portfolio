<template>
  <div class="bag">
    <ul>
      <Item v-for="character in characters" :character=character />
      <li class="item"><router-link to='/'>やめる</router-link></li>
    </ul>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
export default {
  components: {
    Item
  },
  computed: {
    characters() { return this.$store.getters['bag/characters'] }
  }
}
</script>

<style lang="scss">
</style>
