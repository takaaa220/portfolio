<template>
  <div class="name">
    <h2>{{ character.name }}<span>:L{{ character.lv }}</span></h2>
  </div>
</template>

<script>
export default {
  props: ["character"]
}
</script>

<style lang="scss">
.name {
  h2 {
    font-size: 2rem;
    font-weight: normal;
    letter-spacing: .12rem;
    padding-left: 2rem;
    span {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}
</style>
