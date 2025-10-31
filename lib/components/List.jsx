import React from "react";
import Title from "./Title";
import Todo from "./Todo";
import Form from "./Form";

function List(props) {
  const data = localStorage.getItem(props.target);
  const storedTodos = JSON.parse(data);

  let listTitle;
  if (props.target === 'todos') {
    listTitle = 'Daily To-Dos';
  } else if (props.target === 'weeklyTodos') {
    listTitle = 'Weekly To-Dos';
  } else if (props.target === 'monthlyTodos') {
    listTitle = 'Monthly To-Dos';
  } else {
    console.log("Error: no list title provided");
  }

  const defaultTodos = [
      { title: "Code a to-do list", done: false },
      { title: "Eat breakfast", done: true },
      { title: "Do some exercise", done: false },
      { title: "Water the plants", done: true }
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
    localStorage.setItem(props.target, JSON.stringify(todos));
  }, [todos]);

  const [title, setTitle] = React.useState('');

  return <div className="container">
    <Title title={listTitle}/>
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} done={todo.done} title={todo.title} todos={todos} />
      ))}
    </ul>
    <Form title={listTitle} todos={todos} />
  </div>
}

export default List;
