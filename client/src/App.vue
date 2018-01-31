<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background: #000 url('assets/space.png') repeat;
  color: #18cae6;
  font-family: Lato, sans-serif;
}

#app {
  font-family: 'Inconsolata', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
