import { useState } from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [done, setDone] = useState([])

  function handleSubmit(event) {
    // Prevent the browser from reloading the page
    event.preventDefault();
    
    // Read the form data
    const newTodo = event.target.newtodo.value

    // Add todo to state (copy old state (...todos))
    setTodos([...todos, newTodo])

    // Clear input 
    event.target.newtodo.value = ''
  }

  function todoDone(index) {
    // Make copy of todo state
    const todosCopy = [...todos]

    // Remove todo at index and save it
    const todo = todosCopy.splice(index, 1)
    
    // Update todos state
    setTodos(todosCopy)

    // Add todo to done state
    setDone([...done, todo])
  }

  function todoUndone(index) {
    const doneCopy = [...done]

    const todo = doneCopy.splice(index, 1)

    setDone(doneCopy)

    setTodos([...todos, todo])
  }

  function todoDelete(index) {
    const doneCopy = [...done]

    doneCopy.splice(index, 1)

    setDone(doneCopy)
  }

  return (
    <main>
      <h1>ToDo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="newtodo" placeholder="New todo"></input>
      </form>

      <ul id="todo">
        {todos.map((todo, i) => (
          <li key={i}>
            <p onClick={() => todoDone(i)}>{todo}</p> 
          </li>
        ))}
      </ul>

      <ul id="done">
        {done.map((todo, i) => (
          <li key={i}>
            <p onClick={() => todoUndone(i)}>{todo}</p>
            <span onClick={() => todoDelete(i)}>X</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
