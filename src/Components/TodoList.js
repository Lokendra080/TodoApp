import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function TodoList({itemList, dltUpdate}) {
const dltHandler=(todo)=>{
      dltUpdate(todo)
}  
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>Your Todo</th>
      
      </tr>
    </thead>
    <tbody>
    {(itemList || []).map(function(el, key){
        return (
            
      <tr>
        <td>{key +1}</td>
        <td>{el.todo}
        <div className='btn'>
      
        <Button variant="danger" className='btn-sm' onClick={()=>{dltHandler(el.todo)}}>Delete</Button>{' '}
        </div></td>
      
      </tr>
        )
    }

    )}
      
    </tbody>
  </Table>
  )
}

export default TodoList