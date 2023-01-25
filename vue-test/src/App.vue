<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref([])
const done = ref([])

function addNewTodo() {
  // Check if input is empty
  if (!newTodo.value) return

  // Add input to todos
  todos.value.unshift(newTodo.value)

  // Clear input
  newTodo.value = ''
}

function todoDone(todo, index) {
  // Remove todo at index
  todos.value.splice(index, 1)

  // Add todo to done
  done.value.unshift(todo)
}

function todoUndone(todo, index) {
  // Remove todo at index
  done.value.splice(index, 1)

  // Add todo to done
  todos.value.push(todo)
}

function todoDelete(index) {
  // Remove todo at index
  done.value.splice(index, 1)
}
</script>

<template>
  <main>
    <h1>ToDo</h1>
    <input type="text" placeholder="New todo" v-model="newTodo" @keyup.enter="addNewTodo">

    <ul id="todo">
      <li v-for="(todo, index) in todos" :key="todo">
        <p @click="todoDone(todo, index)">{{ todo }}</p> 
      </li>
    </ul>

    <ul id="done">
      <li v-for="(todo, index) in done" :key="todo">
        <p @click="todoUndone(todo, index)">{{ todo }}</p>
        <span @click="todoDelete(index)">X</span>
      </li>
    </ul>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100vw;
  max-width: 620px;
  border: 1px solid rgb(86, 86, 86); 
  background: rgb(50, 50, 50);
  border-radius: 6px;
  color: rgb(234, 234, 234);
  padding: 1rem;
}

input {
  padding: 0.5rem;
  border: 1px solid rgb(86, 86, 86); 
  border-radius: 6px;
  background: rgb(44, 44, 44);
  color: rgb(234, 234, 234);
}

ul {
  list-style: none;
}

li {
  padding: 0.5rem;
  border: 1px solid rgb(86, 86, 86); 
  border-radius: 6px;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

#done > li {
  color: rgb(132, 132, 132);
  display: flex;
  justify-content: space-between;
}

#done p {
  text-decoration: line-through;
}
</style>
