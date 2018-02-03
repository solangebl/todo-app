<template>
    <div class="list-container">
      <h1>TO-DO LIST</h1>
      <div class="todo-list">
          <div class="todo-list-header">
            <h2>Crear tarea</h2>
            <input name="description" v-model="newTodo" v-on:keyup.enter="addTodo"><br>
            <button v-on:click="addTodo">Agregar</button>
          </div>
          <div class="todo-list-body" v-for="todo in todos" :key="todo.id">
            <div class="">
              <p>
                >> {{ todo.description }}
                <button v-on:click="removeTodo(todo._id)">X</button>
              </p>
            </div>
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
      todos: [],
      newTodo: ''
    }
  },
  mounted () {
    this.getTodos()
  },
  methods: {
    async getTodos () {
      const response = await TodosService.fetchTodos()
      this.todos = response.data.items
    },
    async addTodo () {
      const response = await TodosService.addTodo({description: this.newTodo})
      this.todos.push(response.data)
      this.newTodo = ''
    },
    async removeTodo (id) {
      await TodosService.removeTodo({id: id})
      this.getTodos()
    }
  }
}
</script>

<style>
.todo-list {
  border: 2px solid Gray;
  border-radius: 10px;
  margin: auto;
  width: 30%;
}

.todo-list-header {
  border-bottom: 2px solid Gray;
  padding-bottom: 10px;
}

.todo-list-header input, .todo-list-header textarea{
  background: transparent;
  border: 1px solid Gray;
  margin: 2px 0 2px 0;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
}

.todo-list button{
  background-color: var(--tron-color);
  border: solid 1px var(--tron-color);
  border-radius: 5px;
  box-shadow: 0 0 9px var(--tron-color);
  cursor: pointer;
  color: #fff;
}

.todo-list-body p {
  padding: 0 10px 0 10px;
  text-align: left;
}

.todo-list-body p button {
  float: right;

}
</style>
