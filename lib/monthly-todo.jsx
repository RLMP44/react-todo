const App = () => {
  const data = localStorage.getItem('monthlyTodos');
  const storedMonthly = JSON.parse(data);

  const defaultMonthly = [
      { title: "Code a to-do list", done: false },
      { title: "Eat breakfast", done: true },
      { title: "Do some exercise", done: false },
      { title: "Water the plants", done: true }
    ]

  // if there is data in local storage, use it, otherwise use defaults
  const input = data ? storedMonthly : defaultMonthly;
  // useState returns an array so we can save and destructure it by using const
  // and passing useState an empty array at first
  const [monthlyTodos, changeMonthlyTodos] = React.useState(input);

  // every time there is a change, the browser will track it
  // and change the array listed after the object
  React.useEffect(() => {
    // localStorage expects a string so you must stringify your value first
    localStorage.setItem('monthlyTodos', JSON.stringify(monthlyTodos));
  }, [monthlyTodos]);

  const [title, setTitle] = React.useState('');

  const handleTitleChange = (event) => {
    // calls the method defined when the title array is defined
    setTitle(event.target.value);
  }

  const addMonthlyTodo = () => {
    console.log('adding a to-do...');
    const newMonthlyTodo = { title, done: false };
    // calls the method used to alter the array, defined when the array is defined
    changeMonthlyTodos([...monthlyTodos, newMonthlyTodo]);
  }

  const deleteMonthlyTodo = (index) => {
    console.log('deleting to-do...');
    // uses index to find the monthlyTodo to be deleted and sends an array without it to the changeMonthlyTodos method
    changeMonthlyTodos(monthlyTodos.filter((monthlyTodo, i) => i !== index));
  }

  const handleCheckChange = (index) => () => {
    // uses index to find the monthlyTodo to be changed and alters its done boolean if the index matches
    changeMonthlyTodos(monthlyTodos.map((t, i) => i === index ? { title: t.title, done: !t.done } : t));
  }

  return (
    <div id="app">
      <div className="container">
        <h1>Monthly To-Dos</h1>
        <ul>
          {monthlyTodos.map((monthlyTodo, index) => (
            <li key={index} class="m-2 p-2 todo monthlyTodo">
              <div class='d-flex todo-element'>
                <input class='checkbox mx-2' type='checkbox' checked={monthlyTodo.done} onChange={handleCheckChange(index)}/>
                <span class={ monthlyTodo.done ? 'text-decoration-line-through': 'text-white' }>
                  {monthlyTodo.title}
                </span>
                <button class='btn mx-2 delete-button' type='button' onClick={() => deleteMonthlyTodo(index)}><svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
              </div>
            </li>
          ))}
        </ul>
        <form class='form p-3'>
          <label class='mx-2' htmlFor='monthlyTodoTitle'>Title:</label>
          <input type='text' id='monthlyTodoTitle' value={title} onChange={handleTitleChange} placeholder='New to-do...' />
          <button class='add-button' type='button' onClick={addMonthlyTodo}>Add to-do</button>
        </form>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('monthly')
);
