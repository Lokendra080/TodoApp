import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AddTodo({update}) {
    const [input, setInput] =React.useState('');

    const onChangeHandler=(e)=>{
        setInput(e.target.value)

    }
    const onSave =()=>{
        if((input==='')){
            alert('Invalid input')
        }else{
            update(input)
            setInput('')
        }
    }

  return (
    <InputGroup className="mt-5 mb-3">
        <Form.Control
        onChange={onChangeHandler}
          placeholder="Please type hare"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={input}
        />
        <Button onClick={onSave}  id="button-addon2">
          Add Todo
        </Button>
        
        
      </InputGroup>
  )
}

export default AddTodo