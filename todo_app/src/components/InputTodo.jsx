import React, { useRef} from 'react'
import { v4 as uuidv4 } from "uuid";

function InputTodo({todos, setTodos}) {

  const inputEl = useRef(null);

// //   todoタスクをセット
  // const handleSetTodo = () => {
  //     setTodo(
  //       {
  //       id: uuidv4(),
  //       text: inputEl.current.value,
  //       check: false
  //     }
  //   );
  // };

// todoタスクを追加
  const handleAddTodo = (e) => {
    e.preventDefault(); //画面遷移を阻止
    setTodos([...todos, 
      {
        id: uuidv4(),
        text: inputEl.current.value,
        check: false
      }
    ]);
    console.table(todos);
    inputEl.current.value = null;
}
  return (
    <div className='inputForm'>
        <form>
            <input type="text" ref={inputEl}/>
            {/* <input type="text" ref={inputEl} onChange={handleSetTodo} /> */}
            <button onClick={handleAddTodo}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </form>
    </div>
  )
}

export default InputTodo