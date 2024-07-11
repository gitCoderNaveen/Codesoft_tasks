import React from 'react'
import {v4 as uuidv4} from 'uuid';

export default function Form({ input, setInput, todos, setTodos }) {
    const inputChange = (e) => {
        setInput(e.target.value)
    }

    const onFormSubmit =(e)=>{
        e.preventDefault();
        setTodos([...todos, {id:uuidv4(), title:input, completed:false}])
        setInput('')        
    }
    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Add Task'
                    className='task-input'
                    value={input}
                    required
                    onChange={inputChange} />
                <button 
                className='button-add' 
                type='submit'
                onClick={onFormSubmit}
                >Add</button>
            </form>
        </div>
    )
}
