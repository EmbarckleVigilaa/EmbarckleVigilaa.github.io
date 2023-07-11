import React,{useState} from "react"
import './style.scss'

type item={
    id:number;
    text:string;
    completed:boolean;
}


export const Todo:React.FC=()=>{
    const [todo,setTodo]=useState<item[]>([
        {
            id:1, text:"Learn react typescript", completed:false
        },
        {
            id:2, text:"Create todo list", completed:false
        }
    ])
    const [input,setInput]=useState<string>('');

    const handleToggle=(id:number)=>{
        setTodo(
            todo.map((todo)=>{
                if(todo.id===id){
                    return{...todo,completed:!todo.completed}
                }
                return todo;
            })
        )
    }
    const handleClick=()=>{
        const newTodo:item={id:Date.now(),text:input,completed:false};
        setTodo([...todo,newTodo])
    }
    const handleDelete=()=>{
        const updateTodo:item={id:Date.now(),text:input,completed:true};

    }

    return(
        <div className="main-container">
            <h1>Todo List</h1>
        <ul>
            {todo.map((todo)=>(
                <li key={todo.id} onClick={()=> handleToggle(todo.id)} style={{textDecoration:todo.completed?"line-through":"none"}}>{todo.text}</li>
            ))}
            
        </ul>
        <input type="text" placeholder="Add here" onChange={(e)=>setInput(e.currentTarget.value)}></input>
        <button onClick={handleClick}>Add</button>
        <button onClick={handleDelete}>Delete</button>
        </div>
    )
    
}