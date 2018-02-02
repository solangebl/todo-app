import Api from '@/services/Api'

export default {
  fetchTodos () {
    return Api().get('todos')
  },
  addTodo (todo) {
    return Api().post('todos/add', todo)
  },
  removeTodo (id) {
    return Api().post('todos/remove', id)
  }
}
