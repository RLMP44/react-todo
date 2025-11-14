import React from 'react'
import Form from './Form'
import Todo from './Todo'
import Title from './Title'
import { getTodos } from '../../utils/functions'

function List(props) {
  const input = getTodos(props.target + 's')
  // useState returns an array so we can save and destructure it by using const
  // and passing useState an empty array at first
  const [todos, changeTodos] = React.useState(input);

  // every time there is a change, the browser will track it
  // and change the array listed after the object
  React.useEffect(() => {
    // localStorage expects a string so you must stringify your value first
    localStorage.setItem((props.target + 's'), JSON.stringify(todos));
  }, [todos, props.target]);

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
    <div className="container">
      <Title target={props.target}/>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            target={props.target}
            key={index}
            title={todo.title}
            done={todo.done}
            index={index}
            check={handleCheckChange}
            delete={deleteTodo}
          />
        ))}
      </ul>
      <Form
        title={props.title}
        change={handleTitleChange}
        add={addTodo}
      />
    </div>
  )
}

export default List
