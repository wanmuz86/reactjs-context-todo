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

};

export {TodoProvider}