<template>
    <div class="list-container">
      <h1>TO-DO LIST</h1>
      <div class="todo-list">
          <div class="todo-list-header">
            <h2>Crear tarea</h2>
            <input type="text" name="title">
            <input type="text" name="description"><br>
            <button v-on:click="addTodo">Agregar</button>
          </div>
          <div v-for="todo in todos" :key="todo.id">
            <div class="card">
              <p>
                <span><b>$ {{ todo.title }}</b></span><br />
                <span> >> {{ todo.description }}</span>
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
      todos: []
    }
  },
  mounted () {
    this.getTodos()
  },
  methods: {
    async getTodos () {
      const response = await TodosService.fetchItems()
      this.todos = response.data.items
    },
    async addTodo () {
      //const response = await TodosService.addTodo()
      console.log()
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

.todo-list-header input{
  background: transparent;
  border: 1px solid Gray;
  margin: 2px 0 2px 0;
  border-radius: 5px;
  color: #fff;
}

.todo-list-header button{
  background-color: var(--tron-color);
  border: solid 1px var(--tron-color);
  border-radius: 10px;
  box-shadow: 0 0 9px var(--tron-color);
  cursor: pointer;
  color: #fff;
}
</style>
