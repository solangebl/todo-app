<template>
    <div class="todo-list">
        <h1>TO-DO LIST</h1>
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
.card {
  border: 2px solid Gray;
  border-radius: 10px;
}
</style>
