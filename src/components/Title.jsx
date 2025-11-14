function Title(props) {
  let title;
  if (props.target === 'todo') {
    title = "Daily To-Dos"
  } else if (props.target === 'weeklyTodo') {
    title = "Weekly To-Dos"
  } else if (props.target === 'monthlyTodo') {
    title = "Monthly To-Dos"
  } else {
    console.log('error with title')
  }

  return(
    <h1>{title}</h1>
  )
}

export default Title
