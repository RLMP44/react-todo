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
        <h1>To-Do List</h1>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} class="m-2 p-2">
              <div>
                <input class='checkbox mx-2' type='checkbox' checked={todo.done} />
                  {todo.title}
                  <button class='btn mx-2' type='button' onClick={() => deleteTodo(index)}>X</button>
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
