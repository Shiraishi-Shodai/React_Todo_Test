import React, { useState } from 'react'

function InputTodo({todos, setTodos}) {

  const [todo, setTodo] = useState({id: 0, text: "", check: false});
//   todoタスクをセット
  const handleSetTodo = (e) => {
      setTodo(
        {
        id: todo.id + 1,
        text: e.target.value,
        check: false
      }
    );
  };
// todoタスクを追加
  const handleAddTodo = (e) => {
    e.preventDefault(); //画面遷移を阻止
    setTodos([...todos, todo]);
    // console.log(todos);
    setTodo(prev => ({
        ...todo,
        text: ""
     })
    );
}
  return (
    <div className='inputForm'>
        <form>
            <input type="text" value={todo.text} onChange={handleSetTodo}/>
            <button onClick={handleAddTodo}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </form>
    </div>
  )
}

export default InputTodo