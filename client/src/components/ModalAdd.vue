<template>
  <modal-component @close="showModal = false">
    <h3 slot="header">Crear Lista</h3>
    <form slot="body">
      <input v-model="newList" v-on:keyup.enter="addList()" type="text" name="name" />
    </form>
    <div slot="footer">
      <button class="add-button" v-on:click="addList()">OK</button>
      <button class="cancel-button" @click="$emit('close')">Cancelar</button>
    </div>
  </modal-component>
</template>

<script>

import TodosService from '@/services/TodosService'

import Modal from './Modal.vue'

export default {
  name: 'ModalAdd',
  data: function () {
    return {
      newList: ''
    }
  },
  components: {
    'modal-component': Modal
  },
  methods: {
    async addList () {
      await TodosService.addList({name: this.newList})
      this.newList = ''
      this.$emit('close')
    }
  }
}
</script>
