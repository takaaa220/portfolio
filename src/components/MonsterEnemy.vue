<template>
    <div class="monster-enemy">
      <transition name="enemy" appear>
        <div class="monster">
        </div>
      </transition>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.enemy-enter-active, .enemy-leave-active {
  transition: transform .5s, opacity 1s;
}
.enemy-enter, .enemy-leave-to {
  transform: scale(0, 0);
  opacity: 0;
}
.monster-enemy {
  grid-area: monster1;
  .monster {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    background: url(./../assets/images/web.svg) no-repeat center center;
    background-size: 70%;
  }
}
</style>
