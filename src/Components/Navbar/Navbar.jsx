import React, { useState } from 'react';
import style from '../Navbar/Navbar.module.css';

function Navbar() {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      setTodoList([...todoList, todoText]);
      setTodoText('');
    }
  };

  return (
    <div >
      <div className={style.list}>
      <img src="https://cdn-icons-png.flaticon.com/128/5775/5775312.png" alt="todo icon" />
      <input type="text" placeholder="   Etməli olduqlarınız siyahınızı yaradın" value={todoText} onChange={handleInputChange}/>
      <button onClick={handleAddTodo}>Add</button>
      </div>
     

      <div className={style.card}>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      </div>
    </div>
    
  );
}

export default Navbar;
