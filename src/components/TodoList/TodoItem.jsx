import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaRegSquare, FaCheckSquare } from "react-icons/fa";

import { useState } from "react";
import TaskMenu from "./TaskMenu";

function TodoItem({todo, deleteTask, editTask, toggleCompleted}) {
    const [isOpen, setIsOpen] = useState(false);

    const date = new Date(todo.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }); 
    const time = new Date(todo.date).toLocaleTimeString( 'ru-RU', { hour: '2-digit', minute: '2-digit'})

    return (
     <div className="flex justify-between my-2 ">
      <li className="bg-white rounded-lg shadow-sm p-4 w-4/5 flex items-center gap-x-4">
        {todo.completed ? (
            <FaCheckSquare 
                className={`cursor-pointer `}
                color={todo.color} 
                size={20} 
                onClick={() => toggleCompleted(todo.id)}
            />
           
        ) : (
            <FaRegSquare 
                className={`cursor-pointer `}
                color={todo.color} 
                size={20} 
                onClick={() => toggleCompleted(todo.id)}
            />
        )}
        <div className="flex flex-col">
            <span className="text-lg font-medium">{todo.title}</span>
            <span className="font-medium opacity-60">{date}</span>
        </div>
        <div className="flex items-center gap-x-4 ml-auto ">
            <span className={`rounded-full font-medium text-sm text-white px-2 py-1`} style={{background: todo.color}}>{time}</span>
            {isOpen ? (
                <IoIosArrowBack  
                    className={`cursor-pointer `}
                    onClick={() => setIsOpen(!isOpen)} 
                    size={25} 
                    color="gray"
                />
            ) : (
                <IoIosArrowForward 
                    className={`cursor-pointer `}
                    onClick={() => setIsOpen(!isOpen)} 
                    size={25} 
                    color="gray"
                />
            )}
        </div>
      </li>
        <TaskMenu 
            setIsOpen={setIsOpen}
            todo={todo}
            isOpen={isOpen}
            editTask = {editTask}
            deleteTask={deleteTask}
        />
     </div>
    );


  }
  
  export default TodoItem;