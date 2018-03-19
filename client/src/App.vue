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

input{
  background: transparent;
  border: 1px solid Gray;
  margin: 2px 0 2px 0;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
}

button.add-button{
  background-color: var(--tron-color);
  border: solid 1px var(--tron-color);
  border-radius: 5px;
  box-shadow: 0 0 9px var(--tron-color);
  cursor: pointer;
  color: #fff;
  margin: 10px
}

button.cancel-button{
  background-color: var(--tron-orange);
  border: solid 1px var(--tron-orange);
  border-radius: 5px;
  box-shadow: 0 0 9px var(--tron-orange);
  cursor: pointer;
  color: #fff;
  margin: 10px
}
</style>
