import React from 'react';
import './styles.css';
function Form({ input, setInput, addTodo }) {
  return (
    <div className='FormContainer'>
      <input
        className='Input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        role='input'
      />
      <button className='Button' type='submit' onClick={(e) => addTodo(e)}>
        Add
      </button>
    </div>
  );
}

export default Form;
