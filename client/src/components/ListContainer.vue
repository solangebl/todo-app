<template>
    <div class="list-container">
        <button id="show-modal" @click="showModal = true">Nueva Lista</button>
        <modal-component :newList="this.newList" v-if="showModal" @close="showModal = false">
          <h3 slot="header">Crear Lista</h3>
          <form slot="body">
            <input v-model="newList" type="text" name="name" />
          </form>
          <div slot="footer">
            <button class="modal-default-button" v-on:click="$emit('add')">OK</button>
            <button class="modal-cancel-button" @click="$emit('close')">Cancelar</button>
          </div>
        </modal-component>
        <list-component v-for="list in lists" :key="list.id" :todos2="list.items"></list-component>
    </div>
</template>

<script>

import TodosService from '@/services/TodosService'

import Modal from './Modal.vue'
import List from './List2.vue'

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
    'modal-component': Modal
  },
  mounted () {
    this.getLists()
  },
  methods: {
    async getLists () {
      const response = await TodosService.fetchLists()
      this.lists = response.data.lists
    },
    async addList () {
      console.log('agregar')
      await TodosService.addList({name: this.newList})
      this.newList = ''
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
