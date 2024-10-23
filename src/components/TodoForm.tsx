import React, { useState } from "react"; 


const TodoForm = ()=>{

    const [task, setTask] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        if(task.trim()){
           console.log(task);
            setTask('');
        }
    
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center mt-4">
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            />
            <button
             type="submit"
             className="px-8 rounded-r-lg bg-blue-500 text-white font-bold p-2 uppercase border-blue-500 border-t border-b border-r"
            >
                Add Task
            </button>
        </form>

    )
}

export default TodoForm; 