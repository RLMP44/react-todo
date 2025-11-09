import '../App.css'
import React from 'react'
import List from './List'

function App() {
  const data = localStorage.getItem('todos');
  const storedTodos = JSON.parse(data);

  const defaultTodos = [
      { id: 1, title: "Code a to-do list", done: false },
      { id: 2, title: "Eat breakfast", done: true },
      { id: 3, title: "Do some exercise", done: false },
      { id: 4, title: "Water the plants", done: true }
    ]

  // if there is data in local storage, use it, otherwise use defaults
  const input = data ? storedTodos : defaultTodos;
  // useState returns an array so we can save and destructure it by using const
  // and passing useState an empty array at first
  const [todos, changeTodos] = React.useState(input);

  // every time there is a change, the browser will track it
  // and change the array listed after the object
  React.useEffect(() => {
    // localStorage expects a string so you must stringify your value first
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const [title, setTitle] = React.useState('');

  const handleTitleChange = (event) => {
    // calls the method defined when the title array is defined
    setTitle(event.target.value);
  }

  const addTodo = () => {
    console.log('adding a to-do...');
    const newTodo = { title, done: false };
    // calls the method used to alter the array, defined when the array is defined
    changeTodos([...todos, newTodo]);
  }

  const deleteTodo = (index) => {
    console.log('deleting to-do...');
    // uses index to find the todo to be deleted and sends an array without it to the changeTodos method
    changeTodos(todos.filter((todo, i) => i !== index));
  }

  const handleCheckChange = (index) => () => {
    // uses index to find the todo to be changed and alters its done boolean if the index matches
    changeTodos(todos.map((t, i) => i === index ? { title: t.title, done: !t.done } : t));
  }

  return (
    <div id="app">
      <List
        target='todo'
        todos={todos}
        check={handleCheckChange}
        delete={deleteTodo}
        change={handleTitleChange}
        add={addTodo}
        title={title}
      />
      <List
        target='weeklyTodo'
        todos={todos}
        check={handleCheckChange}
        delete={deleteTodo}
        change={handleTitleChange}
        add={addTodo}
        title={title}
      />
      <List
        target='monthlyTodo'
        todos={todos}
        check={handleCheckChange}
        delete={deleteTodo}
        change={handleTitleChange}
        add={addTodo}
        title={title}
      />
    </div>
  );
}

export default App
