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
:root {
  --tron-color: #18cae6;
  --dark-blue: #01879A;
  --tron-orange: #d85f00;
}

body {
  background: #000 url('./assets/space.png') repeat;
  color: var(--tron-color);
  font-family: "Noto Mono", monospace;
}

#app {
  font-family: "Noto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
