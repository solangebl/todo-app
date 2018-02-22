<template>
    <div class="list-container">
        <button id="show-modal" @click="showModal = true">Nueva Lista</button>
        <modal-component v-if="showModal" @close="showModal = false">
          <h3 slot="header">Crear Lista</h3>
        </modal-component>
        <list-component v-for="list in lists" :key="list.id" :todos2="list.items"></list-component>
    </div>
</template>

<script>

import TodosService from '@/services/TodosService'

import ModalAdd from './ModalAdd.vue'
import List from './List2.vue'

export default {
  name: 'list',
  data () {
    return {
      lists: [],
      newTodo: '',
      showModal: false
    }
  },
  components: {
    'list-component': List,
    'modal-component': ModalAdd
  },
  mounted () {
    this.getLists()
  },
  methods: {
    async getLists () {
      const response = await TodosService.fetchLists()
      this.lists = response.data.lists
    }
  }
}
</script>

<style>

button{
  background-color: var(--tron-color);
  border: solid 1px var(--tron-color);
  border-radius: 5px;
  box-shadow: 0 0 9px var(--tron-color);
  cursor: pointer;
  color: #fff;
  margin: 10px
}

</style>
