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
@import url('https://fonts.googleapis.com/css?family=Lato:100&effect=neon');

:root {
  --tron-color: #18cae6;
  --dark-blue: #01879A;
  --tron-orange: #f93;
}

body {
  background: #000 url('./assets/space.png') repeat;
  color: var(--tron-color);
  font-family:  'Lato Regular', monospace;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.font-effect-neon{
  font-family:  'Lato Hairline', monospace;
}
</style>
