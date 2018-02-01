<template>
    <div class="todo-list">
        <div class="todo-list-header">
          <h1>TO-DO LIST</h1>
        </div>
        <div v-for="todo in todos" :key="todo.id">
          <div class="card">
            <p>
              <span><b>{{ todo.title }}</b></span><br />
              <span>{{ todo.description }}</span>
            </p>
          </div>
        </div>
    </div>
</template>

<script>

import ItemsService from '@/services/ItemsService'

export default {
  name: 'list',
  data () {
    return {
      todos: []
    }
  },
  mounted () {
    this.getItems()
  },
  methods: {
    async getItems () {
      const response = await ItemsService.fetchItems()
      this.todos = response.data.items
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
}
</style>
