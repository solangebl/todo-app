<template>
    <div class="list-container">
        <div class="wrapper">
          <list-component v-for="list in lists" :key="list.id" :listId="list._id"></list-component>
          <list-creator-component @added="listCreated"></list-creator-component>
        </div>
    </div>
</template>

<script>

import TodosService from '@/services/TodosService'

import List from './List.vue'
import ListCreator from './ListCreator.vue'

export default {
  name: 'list',
  data () {
    return {
      lists: []
    }
  },
  components: {
    'list-component': List,
    'list-creator-component': ListCreator
  },
  mounted () {
    this.getLists()
  },
  methods: {
    async getLists () {
      const response = await TodosService.fetchLists()
      this.lists = response.data.lists
    },
    listCreated () {
      this.showModal = false
      this.getLists()
    }
  }
}
</script>

<style>

.wrapper{
  display: grid;
  grid-area: auto;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 10px;
}

</style>
