<template>
  <div class="todos">
    <h1>할 일 수정</h1>
      <div class="form">
        <div>
          <input type="text" name="name" placeholder="할 일" v-model="name">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="상세설명" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_todo_btn" @click="updateTodo">할 일 수정</button>
        </div>
      </div>
  </div>
</template>

<script>
import TodosService from '@/services/TodosService'
export default {
  name: 'EditTodo',
  data () {
    return {
      name: '',
      description: ''
    }
  },
  mounted () {
    this.getTodo()
  },
  methods: {
    async getTodo () {
      const response = await TodosService.getTodo({
        id: this.$route.params.id
      })
      this.name = response.data.name
      this.description = response.data.description
    },
    async updateTodo () {
      await TodosService.updateTodo({
        id: this.$route.params.id,
        name: this.name,
        description: this.description
      })
      this.$router.push({ name: 'Todos' })
    }
  }
}
</script>
<style lang="scss" scoped>
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_todo_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
