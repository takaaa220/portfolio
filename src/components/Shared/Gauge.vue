<template>
  <div class="hps">
    <div class="hp">HP:</div>
    <div class="hp-gauge" v-bind:style=styleObject[hp]></div>
  </div>
</template>

<script>
export default {
  props: [ 'hp' ],
  data() {
    return {
      styleObject: [
        { width: "100%"},
        { width: "80%"},
        { width: "60%"},
        { width: "40%", backgroundColor: "#f0f000"},
        { width: "20%", backgroundColor: "red"}
      ]
    }
  }
}
</script>

<style lang="scss">
.hps {
  margin: 0 0 0 10px;
  border-right: solid 10px #333;
  border-bottom: solid 2px #333;
  display: grid;
  grid-template-columns: 45px 1fr;
  .hp {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    background-color: #333;
    color: yellow;
  }
  .hp-gauge {
    position: relative;
    top: 8px;
    // width: 100%;
    height: 45%;
    background-color: green;
  }
}
</style>
