<script>
  let newTodo = ''
  let todos = []
  let done = []

  function addNewTodo() {
    // Check if input is empty
    if (!newTodo) return

    // Add input to todos
    todos.unshift(newTodo)

    // Clear input
    newTodo = ''

    // Trigger update
    todos = [...todos] // or: todos = todos
  }

function todoDone(todo, index) {
  // Remove todo at index
  todos.splice(index, 1)

  // Add todo to done
  done.unshift(todo)

  // Trigger update
  todos = todos
  done = done
}

function todoUndone(todo, index) {
  // Remove todo at index
  done.splice(index, 1)

  // Add todo to todos
  todos.push(todo)

  // Trigger update
  done = done
  todos = todos
}

function todoDelete(index) {
  console.log('delete...')
  // Remove todo at index
  done.splice(index, 1)

  // Trigger update
  done = done
}
</script>

<main>
  <h1>ToDo</h1>
  <form on:submit|preventDefault={addNewTodo}>
    <input type="text" placeholder="New todo" bind:value={newTodo}>
  </form>

  <ul id="todo">
    {#each todos as todo, i (i)}
      <li>
        <p on:click={todoDone(todo, i)}>{todo}</p> 
      </li>
    {/each}
  </ul>

  <ul id="done">
    {#each done as todo, i (i)}
      <li>
        <p on:click={todoUndone(todo, i)}>{todo}</p> 
        <span on:click={todoDelete(i)}>X</span>
      </li>
    {/each}
  </ul>
</main>

<style>
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
  width: 100%;
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
