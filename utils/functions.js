function getTodos(target) {
  const defaultTodos = [
    { id: 1, title: "Code a to-do list", done: false },
    { id: 2, title: "Eat breakfast", done: true },
    { id: 3, title: "Do some exercise", done: false },
    { id: 4, title: "Water the plants", done: true }
  ]
  const data = localStorage.getItem(target);
  const storedTodos = JSON.parse(data);
  // if there is data in local storage, use it, otherwise use defaults
  return data ? storedTodos : defaultTodos;
}

export { getTodos };
