import React from 'react'

function TodoList({todos, setTodos}) {

    // todoタスクの削除
    const deleteTodo = (id) => {
        console.log(id);
        setTodos(todos.filter((todo) => todo.id !== id));
    }
  return (
    <div className='TodoList'>
        <div className="todos">
            <div>
                {
                    todos.map((t) => (
                        <div className="todo" key={t.id}>
                            <div className='todoText'><span>{t.text}</span></div>
                            <div className="icons">
                                <button>
                                    <i className="fa-solid fa-check"></i>  
                                </button>
                                <button onClick={() => deleteTodo(t.id)}>
                                    <i className="fa-solid fa-trash"></i>  
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default TodoList