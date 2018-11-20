<template>
  <div class="serif">
    <div class="wrapper">
      <div class="content">
        <p v-html="message"></p>
      </div>
    </div>
    <CommandList v-if="commandShow"/>
    <SerifNext v-if="nextShow"/>
  </div>
</template>

<script>
import CommandList from '@/components/Battle/CommandList.vue'
import SerifNext from '@/components/Battle/SerifNext.vue'
export default {
  name: "Serif",
  components: { CommandList, SerifNext },
  computed: {
    message() { return this.$store.getters['battle/message'] },
    commandShow() { return this.$store.getters['battle/commandShow'] },
    nextShow() { return this.$store.getters['battle/nextShow'] }
  }
}
</script>

<style lang="scss">
.serif {
  grid-area: serif;
  position: relative;
  height: 100%;
  padding: .2rem;
  border-radius: 1rem;
  border: solid .2rem #333;
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    border: solid .2rem #333;
    border-top: solid .5rem #333;
    border-bottom: solid .5rem #333;
    .content {
      position: absolute;
      bottom: 0;
      padding: .5rem 2rem;
      font-size: 2.4rem;
      line-height: 2.0;
      a {
        text-decoration: underline;
        &:hover {
          color: blue;
        }
      }
    }
  }
}
</style>
