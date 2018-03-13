<template id="list">
  <div class="todo-list">
      <div class="todo-list-header">
        <h2>{{ list.title }}</h2>
        <input name="description" v-model="newTodo" v-on:keyup.enter="addTodo()"> <button v-on:click="addTodo">Agregar</button>
      </div>
      <div class="todo-list-body" >
        <div class="" style="margin-bottom:10px;" v-for="todo in list.todos" :key="todo.id">
          <p>
            >> {{ todo.description }}
            <button v-on:click="removeTodo(todo._id)">X</button>
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
      list: '',
      newTodo: ''
    }
  },
  props: ['listId'],
  mounted () {
    this.fetchList(this.listId)
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
  background: transparent;
  border: 1px solid Gray;
  margin: 2px 0 2px 0;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  width: 80%;
}

.todo-list button{
  background-color: var(--tron-color);
  border: solid 1px var(--tron-color);
  border-radius: 5px;
  box-shadow: 0 0 9px var(--tron-color);
  cursor: pointer;
  color: #fff;
}

.todo-list-body div p {
  padding: 0 10px 0 10px;
  text-align: left;
}

.todo-list-body div p button {
  float: right;
  margin: 0 10px 0 10px;
}
</style>
