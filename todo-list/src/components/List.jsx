import Form from './Form'
import Todo from './Todo'
import Title from './Title'

function List(props) {
  return (
    <div className="container">
      <Title target={props.target}/>
      <ul>
        {props.todos.map((todo, index) => (
          <Todo
            target={props.target}
            key={index}
            title={todo.title}
            done={todo.done}
            index={index}
            check={props.check}
            delete={props.delete}
          />
        ))}
      </ul>
      <Form
        title={props.title}
        change={props.change}
        add={props.add}
      />
    </div>
  )
}

export default List
