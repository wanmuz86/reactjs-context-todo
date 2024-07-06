import React, { useState } from 'react'
import { useTodo } from '../lib/TodoContext'
const Add = () => {

    const {dispatch} = useTodo() // I need  the method in this file
    const [text, setText] = useState('')
    const addTodo = () => {
        dispatch({type:'ADD_TODO', payload:{id:Date.now(),text}})
        setText('')

    }
  return (
    <div>
        <h2>Add new Todo</h2>
        <div>
            <input type="text" value={text} 
            onChange={(e)=>setText(e.target.value)}/>
            <button onClick={addTodo}>Add To Do</button>
        </div>
    </div>
  )
}

export default Add