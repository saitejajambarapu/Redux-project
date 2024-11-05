import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo } from "../features/todoslice";

export default function AddForm() {
    const [task,setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(task));
        setTask("");
        
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <input value={task} onChange={(e)=>setTask(e.target.value)} required></input>
                <button type="submit">Add Task</button>
            </form>
        </>
    );

}