import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import {deleteTodo , markAsDone } from "../features/todoslice";
export default function Todo(){
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();
    const DeleteHandler=(id)=>{
        dispatch(deleteTodo(id));
    };
    const madHandler = (id)=>{
        dispatch(markAsDone(id));
    };
    return <div>
        <h1>Todo List App</h1>
        <ul>
            {todos.map((todo)=>(
                <li style={{textDecoration: todo.isDone ? 'line-through' : 'none',}} key={todo.id}>{todo.task} 
            <button onClick={()=>DeleteHandler(todo.id)}>Delete</button> 
            <button onClick={()=>madHandler(todo.id)}>Mark As Done</button> </li>))}
        </ul>
    </div>
}