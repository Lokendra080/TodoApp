import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

function Todo() {
    const [todoList, setTodolist]=React.useState([]);
    const updateTodoList=(input)=>{
        setTodolist([...todoList,{
            id: Date.now(),
            todo:input
        }])
    }
    const deleteStateDone=(todo)=>{
      const newTodolist=[...todoList];
      newTodolist.splice(todo, 1)
      setTodolist(newTodolist);
      


    }
  return (
    <div className='main-todo'>
        <AddTodo update={updateTodoList}/>
        <TodoList itemList={todoList} dltUpdate={deleteStateDone}/>
    </div>
  )
}

export default Todo