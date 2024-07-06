import React, { createContext, useContext, useReducer } from "react";

const TodoContext = createContext(); // Later to group the provider 

// <TodoProvider>-> The group of components that will share
// the todos state 
// We will call it later inside main.jsx
// <TodoProvider><App/></TodoProvider>
// All subcomponent inside App
// Add, List and Row will have access to all the states and methods defined here

const TodoProvider = ({ children }) => {

    // This is where I defined all the shareable states and it's initial value
    const initialState = {
        todos: [],
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
                    todos: [...state.todos, action.payload]
                }

            case 'REMOVE_TODO':  // FOR ROW (DELETE)

                // I will return the state {}
                // And the value of todos in the state will be replaced with new array filtered from the id
                return {
                    ...state,
                    todos: state.todos.filter(val => val.id !== action.payload)
                }

            default:
                return state;   // FOR LIST
        }
    }

// intialState => state in this file / todos
// todoReducer => actions accesible by component declared in this file

// we use useReducer to combine and export this state and method so that it is accesible by the components, through the <TodoContext.Provider> element

    const [state, dispatch] = useReducer(todoReducer, initialState);
    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}

// This is a custom hook, later, our component will retrieve state and dispatch frm this hook



const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider')
    }
    return context
}

export { TodoProvider, useTodo }