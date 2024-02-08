const App = () => {
  const [todos, changeTodos] = React.useState(
    [
      { title: "Code a to-do list", done: false },
      { title: "Eat breakfast", done: true },
      { title: "Do some exercise", done: false },
      { title: "Water the plants", done: true }
    ]
  );
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
    changeTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div id="app">
      <div className="container">
        <h1>Daily To-Do List</h1>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} class="m-2 p-2 todo">
              <div class='d-flex todo-element'>
                <input class='checkbox mx-2' type='checkbox' checked={todo.done} />
                <span class={ todo.done ? 'text-decoration-line-through': 'text-black' }>
                  {todo.title}
                </span>
                <button class='btn mx-2 delete-button' type='button' onClick={() => deleteTodo(index)}><svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
              </div>
            </li>
          ))}
        </ul>
        <form class='form p-3'>
          <label class='mx-2' htmlFor='todoTitle'>Title:</label>
          <input type='text' id='todoTitle' value={title} onChange={handleTitleChange} placeholder='New to-do...' />
          <button class='add-button' type='button' onClick={addTodo}>Add to-do</button>
        </form>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
