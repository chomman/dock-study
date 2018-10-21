<template>
  <div class="container">

    <div class="jumbotron text-center">
            <h1><strong>Vue Client</strong> Example</h1>

        <router-link v-bind:to="{ name: 'Todos' }" class="add_todo_link">Todos App</router-link>
    </div>

</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
