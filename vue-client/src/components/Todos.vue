<template>
  <div class="todos">
    <h1>할 일 목록</h1>
    <div v-if="todos.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewTodo' }" class="">할 일 추가</router-link>
      </div>
      <table>
        <tr>
          <td>할 일</td>
          <td width="550">상세설명</td>
          <td width="100" align="center"></td>
        </tr>
        <tr v-bind:key="todo.id" v-for="todo in todos">
          <td>{{ todo.name }}</td>
          <td>{{ todo.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditTodo', params: { id: todo.id } }">수정</router-link> |
            <a href="#" @click="deleteTodo(todo.id)">삭제</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      할 일이 업네요. 버튼을 눌러 추가할 수 있습니다. <br /><br />
      <router-link v-bind:to="{ name: 'NewTodo' }" class="add_todo_link">할 일 추가</router-link>
    </div>
  </div>
</template>

<script>
import TodosService from '@/services/TodosService'
export default {
  name: 'todos',
  data () {
    return {
      todos: []
    }
  },
  mounted () {
    this.getTodos()
  },
  methods: {
    async getTodos () {
      const response = await TodosService.fetchTodos()
      console.log(JSON.stringify(response, null, 2))
      this.todos = response.data
    },
    async deleteTodo (id) {
      await TodosService.deleteTodo(id)
      this.getTodos()
      this.$router.push({ name: 'Todos' })
    }
  }
}
</script>
<style lang="scss" scoped>
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_todo_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
