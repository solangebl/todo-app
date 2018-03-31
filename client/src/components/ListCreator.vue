<template id="listCreator">
  <div class="list-creator">
      <div class="list-creator-header">
        <h2>
          <input name="description" class="font-effect-neon" v-model="newList" v-on:keyup.enter="addList()" placeholder="Nueva Lista">
        </h2>
        <button class="add-button" v-on:click="addList" :disabled="!addEnabled">Agregar</button>
      </div>
      <div class="todo-list-body" ></div>
  </div>
</template>

<script>

import TodosService from '@/services/TodosService'

export default {
  name: 'listCreator',
  data () {
    return {
      newList: ''
    }
  },
  methods: {
    async addList () {
      if (this.addEnabled) {
        await TodosService.addList({name: this.newList})
        this.newList = ''
        this.$emit('added')
      }
    }
  },
  computed: {
    addEnabled () {
      return (this.newList !== '' && this.newList !== undefined)
    }
  }
}

</script>

<style>
.list-creator {
  border: 2px dashed Gray;
  border-radius: 10px;
  width: auto;
}

.list-creator-header {
  padding-bottom: 10px;
}

.list-creator-header input{
  width: 80%;
  border: none;
  text-align: center
}

.todo-list-body div p {
  padding: 0 10px 0 10px;
  text-align: left;
  color: var(--tron-color);
}

.todo-list-body div p button {
  background: transparent;
  border: none;
  float: right;
  margin: 0 10px 0 10px;
  color: var(--tron-orange);
  text-shadow: 0 0 9px var(--tron-orange);
}
</style>
