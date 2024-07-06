import React, {createContext} from "react";

const TodoContext = createContext(); // Later to group the provider 

// <TodoProvider>-> The group of components that will share
// the todos state 
// We will call it later inside main.jsx
// <TodoProvider><App/></TodoProvider>
// All subcomponent inside App
// Add, List and Row will have access to all the states and methods defined here

const TodoProvider = ({children})=> {

    // This is where I defined all the shareable states and it's initial value
    const initialState = {
        todos:[],
    }

    // Identify all the methods (action type) neeeded from each of the Component
    // As well as the data (action payload) passed by the component

    // Add -> Create method, it will pass name


    // List -> need to read the states [GET]

    // Row -> Delete method -> It will pass the id

    const todoReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TODO': // FOR ADD
            // FOR ADD, I WILL RETURN THE STATE
            // AND MODIFY THE todos in the state by adding the new todoitem , sent through the payload
            // {...} => Object spread operator
            // [...] => Array spread operator
            return {
                ...state, 
                todos: [ action.pa...state.todos,yload]
            }

            case 'REMOVE_TODO':  // FOR ROW (DELETE)

            default:
            return state;   // FOR LIST
        }
    }

};

export {TodoProvider}