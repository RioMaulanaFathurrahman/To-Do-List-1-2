import React, { useContext } from 'react';
import { TodoContext } from '../App';

export default function TodoItem({ todo }) {

  const {toggleCompleted,deleteTodo} = useContext(TodoContext)

  const todoTitleStyle = {
    textDecoration: todo.completed ? 'line-through' : 'none',
    cursor: 'pointer',
  };

  console.log("render")
  return (
    <div style={styles.todoItem}>
      <input 
        type="checkbox" 
        style={styles.checkbox} 
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)} 
        aria-label="Toggle completed"
      />
      <p style={todoTitleStyle} onClick={() => toggleCompleted(todo.id)}>
        {todo.title}
      </p>
      <button 
        style={styles.button} 
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete todo"
      >
        x
      </button>
    </div>
  );
}

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  },
  checkbox: {
    marginRight: '10px',
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginLeft: '10px',
  },
};
