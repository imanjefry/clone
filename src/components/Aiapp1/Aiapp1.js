import React, { useState } from 'react';
import styles from './Aiapp1.module.css';

const Aiapp1 = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>لیست کارها</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="کار جدید را وارد کنید..."
          className={styles.input}
        />
        <button onClick={addTodo} className={styles.addButton}>
          افزودن
        </button>
      </div>
      <div className={styles.todoList}>
        {todos.map(todo => (
          <div key={todo.id} className={styles.todoItem}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? styles.completed : ''}>
              {todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)} className={styles.deleteButton}>
              حذف
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aiapp1; 