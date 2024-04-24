import React, { useState } from "react";
import { useTodo } from "../contexts";

export default function TodoForm() {

    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        console.log(todo)
        addTodo({todo, completed: false})
        setTodo("")
    }

    return(
        <>
            <div className="text-center my-8">
                <form onSubmit={add}>
                    <input 
                    type="text"
                    className="rounded-l-md py-1.5 px-3 w-full max-w-2xl"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    />
                    <button type="submit" className="py-1.5 text-white font-bold bg-green-500 rounded-r-md px-3">Add</button>
                </form>
            </div>
        </>
    )
    
}