<template>
  <li class="item" v-on:click="push(character.msg)">
    <router-link to="/">
      <img v-bind:src=character.img>
      <Character v-bind:character=character />
      <div class="item-gauge">
        <div class="item-hp">{{ character.type }}</div>
        <Gauge v-bind:hp=character.hp />
      </div>
    </router-link>
  </li>
</template>

<script>
import Character from '@/components/Character.vue'
import Gauge from '@/components/Gauge.vue'
export default {
  props: [ 'character' ],
  components: {
    Character, Gauge
  },
  mounted() {
    this.$store.commit('battle/setAppear', { appear: false })
  },
  methods: {
    push(msg) {
      this.$store.dispatch("battle/doMessageMode", msg)
    }
  }
}
</script>

<style lang="scss">
@keyframes flash {
  50% {opacity: 0;}
}
.item {
  // height: 60px;
  // padding: 5px 10px;
  // display: grid;
  // grid-template-columns: 50px 200px 1fr;
  // grid-gap: 5px;
  &:hover {
    animation: flash .7s ease-in-out infinite;
    cursor: pointer;
  }
  a {
    height: 60px;
    padding: 5px 10px;
    display: grid;
    grid-template-columns: 50px 200px 1fr;
    grid-gap: 5px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .item-gauge {
      .item-hp {
        text-align: right;
        padding-right: 20px;
      }
    }
  }
}
</style>
