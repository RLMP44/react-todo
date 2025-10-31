const handleTitleChange = (event) => {
  // calls the method defined when the title array is defined
  setTitle(event.target.value);
}

const addTodo = (todos) => {
  console.log('adding a to-do...');
  const newTodo = { title, done: false };
  // calls the method used to alter the array, defined when the array is defined
  changeTodos([...todos, newTodo]);
}

const deleteTodo = (todos, index) => {
  console.log('deleting to-do...');
  // uses index to find the todo to be deleted and sends an array without it to the changeTodos method
  changeTodos(todos.filter((todo, i) => i !== index));
}

const handleCheckChange = (todos, index) => () => {
  // uses index to find the todo to be changed and alters its done boolean if the index matches
  changeTodos(todos.map((t, i) => i === index ? { title: t.title, done: !t.done } : t));
}

export { handleTitleChange, addTodo, deleteTodo, handleCheckChange };
