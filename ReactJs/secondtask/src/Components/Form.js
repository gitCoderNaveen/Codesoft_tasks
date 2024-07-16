import React, { useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';


export default function Form({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {

    const updateTodo = (title, id, completed )=>{
        const newTodo = todos.map((todo)=>
            todo.id === id? {title, id, completed} : todo
        )
        setTodos(newTodo)
        setEditTodo('')
    }   
    
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title)
        }else{
            setInput('')
        }
    }, [setInput, editTodo])
    const inputChange = (e) => {
        setInput(e.target.value)
    }

    const onFormSubmit =(e)=>{
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id:uuidv4(), title:input, completed:false}])
            setInput('');
        }else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }
        setTodos([...todos, {id:uuidv4(), title:input, completed:false}])
        setInput('')        
    }
    return (
        <div>
            <form onSubmit={onFormSubmit}>
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
                >{editTodo? 'Ok' : 'Add'}</button>
            </form>
        </div>
    )
}
