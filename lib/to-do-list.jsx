// import Form from "./components/Form";
// import Todo from "./components/Todo";
// import Title from "./components/Title";

// const App = () => {
//   const data = localStorage.getItem('todos');
//   const storedTodos = JSON.parse(data);

//   const defaultTodos = [
//       { title: "Code a to-do list", done: false },
//       { title: "Eat breakfast", done: true },
//       { title: "Do some exercise", done: false },
//       { title: "Water the plants", done: true }
//     ]

//   // if there is data in local storage, use it, otherwise use defaults
//   const input = data ? storedTodos : defaultTodos;
//   // useState returns an array so we can save and destructure it by using const
//   // and passing useState an empty array at first
//   const [todos, changeTodos] = React.useState(input);

//   // every time there is a change, the browser will track it
//   // and change the array listed after the object
//   React.useEffect(() => {
//     // localStorage expects a string so you must stringify your value first
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   const [title, setTitle] = React.useState('');

//   return (
//     <div id="app">
//       <div className="container">
//         <Title listTitle="Daily To-Dos"/>
//         <ul>
//           {todos.map((todo, index) => (
//             <Todo key={index} done={todo.done} title={todo.title} todos={todos} />
//           ))}
//         </ul>
//         <Form />
//       </div>
//     </div>
//   );
// }

// export default App;
