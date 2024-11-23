import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.completed ? 'list-group-item-success' : ''
      }`}
    >
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.task}
      </span>
      <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
