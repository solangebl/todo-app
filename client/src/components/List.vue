<template id="list">
  <div class="todo-list">
      <modal-component v-if="showItem" @close="showItem = false">
        <h3 slot="header">
          <button class="modal-cancel-button" @click="showItem = false"><i class="fas fa-times-circle"></i></button>
          {{ item.name }}
        </h3>
        <p slot="body">{{ item.date }}</p>
      </modal-component>
      <div class="todo-list-header">
        <button v-if="isEmpty" class="list-config-button" @click="removeList()"><i class="fas fa-trash-alt"></i></button>
        <h2 class="font-effect-neon">{{ list.title }}</h2>
        <input name="description" v-model="newTodo" v-on:keyup.enter="addTodo()"> <button class="add-button" v-on:click="addTodo">Agregar</button>
      </div>
      <div class="todo-list-body" >
        <div class="" style="margin-bottom:10px;" v-for="todo in list.todos" :key="todo.id">
          <p>
            >> {{ todo.description.substring(0,18) }}
            <button class="remove-button" v-on:click="removeTodo(todo._id)">X</button>
            <button class="view-button" v-on:click="viewTodo(todo.description, todo.date_created)"><i class="fas fa-eye"></i></button>
          </p>
        </div>
      </div>
  </div>
</template>

<script>

import TodosService from '@/services/TodosService'

import Modal from './Modal.vue'

export default {
  name: 'list',
  data () {
    return {
      list: {todos: ''},
      newTodo: '',
      showItem: false,
      item: {name: '', date: ''}
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
    },
    viewTodo (title, date) {
      this.item.name = title
      this.item.date = new Date(date).toDateString()
      this.showItem = true
    }
  },
  components: {
    'modal-component': Modal
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
  padding: 0 5px 0 5px;
  text-align: left;
  color: var(--tron-color);
}

.todo-list-body div p button {
  float: right;
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
