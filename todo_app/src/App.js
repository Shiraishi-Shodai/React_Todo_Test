import './App.css';
import Title from './components/Title';
import InputTodo from './components/InputTodo';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Title/>
      <InputTodo todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  );
}

export default App;
