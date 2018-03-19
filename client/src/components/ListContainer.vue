<template>
    <div class="list-container">
        <button id="show-modal" class="add-button" @click="showModal = true">Nueva Lista</button>
        <modal-add-component v-if="showModal" @close="closeModal"></modal-add-component>
        <div class="wrapper">
          <list-component v-for="list in lists" :key="list.id" :listId="list._id"></list-component>
        </div>
    </div>
</template>

<script>

import TodosService from '@/services/TodosService'

import ModalAdd from './ModalAdd.vue'
import List from './List.vue'

export default {
  name: 'list',
  data () {
    return {
      lists: [],
      newLlist: {name: 'pepe'},
      showModal: false
    }
  },
  components: {
    'list-component': List,
    'modal-add-component': ModalAdd
  },
  mounted () {
    this.getLists()
  },
  methods: {
    async getLists () {
      const response = await TodosService.fetchLists()
      this.lists = response.data.lists
    },
    closeModal () {
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
