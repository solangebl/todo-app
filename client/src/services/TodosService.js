import Api from '@/services/Api'

export default {
  fetchTodos () {
    return Api().get('todos')
  },
  fetchLists () {
    return Api().get('lists')
  },
  addTodo (params) {
    return Api().post('todos/add', params)
  },
  removeTodo (params) {
    return Api().post('todos/remove', params)
  },
  addList (params) {
    return Api().get('lists/add', params)
  }
}
