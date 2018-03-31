import Api from '@/services/Api'

export default {
  fetchTodos () {
    return Api().get('todos')
  },
  fetchLists () {
    return Api().get('lists')
  },
  fetchList (id) {
    return Api().get('list/' + id)
  },
  addTodo (listId, todo) {
    return Api().post('todos/add', {list: listId, params: todo})
  },
  removeTodo (params) {
    return Api().post('todos/remove', params)
  },
  addList (params) {
    return Api().post('lists/add', params)
  },
  removeList (params) {
    return Api().post('lists/remove', params)
  }
}
