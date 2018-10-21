import Api from '@/services/Api'

export default {
  fetchTodos () {
    return Api().get('todos')
  },

  addTodo (params) {
    return Api().post('todos', params)
  },

  updateTodo (params) {
    return Api().put('todos/' + params.id, params)
  },

  getTodo (params) {
    return Api().get('todos/' + params.id)
  },

  deleteTodo (id) {
    return Api().delete('todos/' + id)
  }
}
