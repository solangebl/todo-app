import Api from '@/services/Api'

export default {
  fetchTodos () {
    return Api().get('todos')
  },
  addTodo (params) {
    return Api().post('todos/add', params)
  },
  removeTodo (params) {
    return Api().post('todos/remove', params)
  }
}
