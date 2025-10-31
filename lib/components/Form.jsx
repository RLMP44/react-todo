import React from "react";
import { handleTitleChange, addTodo } from "../../functions";

function Form() {
  return <form class='form p-3'>
    <label class='mx-2' htmlFor='todoTitle'>Title:</label>
    <input type='text' id='todoTitle' value={title} onChange={functions.handleTitleChange} placeholder='New to-do...' />
    <button class='add-button' type='button' onClick={functions.addTodo(todos)}>Add to-do</button>
  </form>
}

export default Form;
