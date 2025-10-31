// const App = () => {
//   const data = localStorage.getItem('weeklyTodos');
//   const storedWeekly = JSON.parse(data);

//   const defaultWeekly = [
//       { title: "Exercise 3 times", done: false },
//       { title: "Solve 2 leetcode exercises", done: true },
//       { title: "Call home", done: true },
//       { title: "Exercise 3 times", done: true }
//     ]

//   // if there is data in local storage, use it, otherwise use defaults
//   const input = data ? storedWeekly : defaultWeekly;
//   // useState returns an array so we can save and destructure it by using const
//   // and passing useState an empty array at first
//   const [weeklyTodos, changeWeeklyTodos] = React.useState(input);

//   // every time there is a change, the browser will track it
//   // and change the array listed after the object
//   React.useEffect(() => {
//     // localStorage expects a string so you must stringify your value first
//     localStorage.setItem('weeklyTodos', JSON.stringify(weeklyTodos));
//   }, [weeklyTodos]);

//   const [title, setTitle] = React.useState('');

//   const handleTitleChange = (event) => {
//     // calls the method defined when the title array is defined
//     setTitle(event.target.value);
//   }

//   const addWeeklyTodo = () => {
//     console.log('adding a to-do...');
//     const newWeeklyTodo = { title, done: false };
//     // calls the method used to alter the array, defined when the array is defined
//     changeWeeklyTodos([...weeklyTodos, newWeeklyTodo]);
//   }

//   const deleteWeeklyTodo = (index) => {
//     console.log('deleting to-do...');
//     // uses index to find the weeklyTodo to be deleted and sends an array without it to the changeWeeklyTodos method
//     changeWeeklyTodos(weeklyTodos.filter((weeklyTodo, i) => i !== index));
//   }

//   const handleCheckChange = (index) => () => {
//     // uses index to find the weeklyTodo to be changed and alters its done boolean if the index matches
//     changeWeeklyTodos(weeklyTodos.map((t, i) => i === index ? { title: t.title, done: !t.done } : t));
//   }

//   return (
//     <div id="app">
//       <div className="container">
//         <h1>Weekly To-Dos</h1>
//         <ul>
//           {weeklyTodos.map((weeklyTodo, index) => (
//             <li key={index} class="m-2 p-2 todo weeklyTodo">
//               <div class='d-flex todo-element'>
//                 <input class='checkbox mx-2' type='checkbox' checked={weeklyTodo.done} onChange={handleCheckChange(index)}/>
//                 <span class={ weeklyTodo.done ? 'text-decoration-line-through': 'text-black' }>
//                   {weeklyTodo.title}
//                 </span>
//                 <button class='btn mx-2 delete-button' type='button' onClick={() => deleteWeeklyTodo(index)}><svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <form class='form p-3'>
//           <label class='mx-2' htmlFor='weeklyTodoTitle'>Title:</label>
//           <input type='text' id='weeklyTodoTitle' value={title} onChange={handleTitleChange} placeholder='New to-do...' />
//           <button class='add-button' type='button' onClick={addWeeklyTodo}>Add to-do</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('weekly')
// );
