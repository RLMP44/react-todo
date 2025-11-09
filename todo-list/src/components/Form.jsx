function Form(props) {
  return <form className='form p-3'>
    <label className='mx-2' htmlFor='todoTitle'>Title:</label>
    <input type='text' id='todoTitle' value={props.title} onChange={props.change} placeholder='New to-do...' />
    <button className='add-button' type='button' onClick={props.add}>Add to-do</button>
  </form>
}

export default Form
