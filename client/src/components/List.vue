<template id="list">
  <div class="todo-list">
      <div class="todo-list-header">
        <button v-if="isEmpty" class="list-config-button" @click="removeList()"><i class="fas fa-trash-alt"></i></button>
        <h2 class="font-effect-neon">{{ list.title }}</h2>
        <input name="description" v-model="newTodo" v-on:keyup.enter="addTodo()"> <button class="add-button" v-on:click="addTodo">Agregar</button>
      </div>
      <div class="todo-list-body" >
        <div class="" style="margin-bottom:10px;" v-for="todo in list.todos" :key="todo.id">
          <p>
            >> {{ todo.description }}
            <button class="remove-button" v-on:click="removeTodo(todo._id)">X</button>
          </p>
        </div>
      </div>
  </div>
</template>

<script>

import TodosService from '@/services/TodosService'

export default {
  name: 'list',
  data () {
    return {
      list: {todos: ''},
      newTodo: ''
    }
  },
  props: ['listId'],
  mounted () {
    this.fetchList(this.listId)
  },
  computed: {
    isEmpty: function () {
      return this.list.todos.length === 0
    }
  },
  methods: {
    async fetchList (id) {
      const response = await TodosService.fetchList(id)
      this.list = response.data.list
    },
    async addTodo () {
      const response = await TodosService.addTodo(this.list._id, {description: this.newTodo})
      this.list = response.data
      this.newTodo = ''
    },
    async removeTodo (id) {
      const response = await TodosService.removeTodo({list: this.list._id, id: id})
      this.list = response.data
    },
    async removeList () {
      const response = await TodosService.removeList({list: this.list._id})
      if (response.data.ok) {
        this.$emit('removed')
      }
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
  float: right;
  margin: 0 10px 0 10px;
  color: var(--tron-orange);
  text-shadow: 0 0 9px var(--tron-orange);
}

.todo-list-header .list-config-button{
  float: right;
  top: 0;
  margin-right: 7px;
  background-color: transparent;
  color: yellow;
}
</style>
