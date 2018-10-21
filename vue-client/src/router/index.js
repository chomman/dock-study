import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/components/Todos'
import NewTodo from '@/components/NewTodo'
import EditTodo from '@/components/EditTodo'
import Hello from '@/views/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/todos/new',
      name: 'NewTodo',
      component: NewTodo
    },
    {
      path: '/todos/:id',
      name: 'EditTodo',
      component: EditTodo
    }
  ]
})
