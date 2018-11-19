<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: "pokemon font", sans-serif;
  font-size: 1.5rem;
  background-color: black;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
#app {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 540px;
  height: 440px;
  background-color: white;
  margin: 0 auto;
  padding: 20px;
}
</style>
