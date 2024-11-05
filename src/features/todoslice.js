import { createSlice, nanoid  } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:"abc", task: "demo-task", isDone: false}],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const newTodo = {
                    id:nanoid(),
                    task:action.payload,
                    isDone:false,
            }
            state.todos.push(newTodo); //direct mutation - without using destructure [...] like in react but in this we can do this

        },deleteTodo:(state, action)=>{
            //using filter to delete a particular id and keepin all the remaining inside the todo
            
           state.todos =  state.todos.filter((todo)=>todo.id!=action.payload)
            
        },markAsDone:(state, action)=>{
            state.todos = state.todos.map((todo)=>{
                if(todo.id === action.payload){
                    return {...todo, isDone: true };
                };
                return todo;
            
            })
        },
    }
});

export const {addTodo , deleteTodo, markAsDone} = todoSlice.actions  //we give the reducers to action to create action obj automatically in the reducx tool as it has this features to create automatically just we need to give what to generate
export default todoSlice.reducer; //to access the reducers in import