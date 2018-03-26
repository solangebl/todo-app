<template id="listCreator">
  <div class="todo-list">
      <div class="todo-list-header">
        <h2 class="font-effect-neon">List Gen</h2>
        <input name="description" v-model="newList" v-on:keyup.enter="addList()"> <button class="add-button" v-on:click="addList">Agregar</button>
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
      newTodo: ''
    }
  },
  props: ['newList'],
  mounted () {
    this.fetchList(this.listId)
  },
  methods: {
    async addList () {
      await TodosService.addList({name: this.newList})
      this.newList = ''
      this.$emit('added')
    }
  }
}

</script>

<style>
.todo-list {
  border: 2px solid Gray;
  border-radius: 10px;
  width: auto;
}

.todo-list-header {
  border-bottom: 2px solid Gray;
  padding-bottom: 10px;
}

.todo-list-header input, .todo-list-header textarea{
  width: 80%;
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
