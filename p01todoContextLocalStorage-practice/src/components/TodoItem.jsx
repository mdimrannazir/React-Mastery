import React, { useState } from "react";
import { TodoContext, useTodo } from "../contexts";

export default function({ todo }){

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo({...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return(
        <>
            <div className="flex justify-center my-4">
                <input 
                    type="checkbox"
                    className="cursor-pointer"
                    onChange={toggleCompleted}
                    checked={todo.completed}
                />
                <input
                    type="text"
                    className={`items-center rounded-l-md text-2xl py-1.5 px-3 w-full max-w-2xl bg-slate-300 ${todo.completed ? "line-through bg-green-300" : ""} ${isTodoEditable ? "bg-white" : ""}`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                    
                />
                <button 
                className="py-1.5 text-white font-bold bg-green-500 px-3 hover:bg-green-700"
                onClick={() => {
                    if (todo.completed) return

                    setIsTodoEditable((prev) => !prev)
                    if (isTodoEditable) {
                        editTodo();
                    } 
                }}>{isTodoEditable ? "Save":"Edit"}
                </button>
                <button
                className="py-1.5 text-white font-bold bg-red-500 rounded-r-md px-3 hover:bg-red-700"
                onClick={() => deleteTodo(todo.id)}
                >Delete</button>
            </div>
        </>
    )
}