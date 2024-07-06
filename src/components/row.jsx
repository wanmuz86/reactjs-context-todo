import React from 'react'
import { useTodo } from '../lib/TodoContext'

const Row = ({todo}) => {

    const {dispatch} = useTodo()

  return (
    <div>
        <h3>{todo.text}</h3>
        <button onClick={()=> dispatch({type:'REMOVE_TODO', 
        payload:todo.id})}>Remove</button>
    </div>
  )
}

export default Row