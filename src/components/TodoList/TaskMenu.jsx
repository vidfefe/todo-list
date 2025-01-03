import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import ModalOfTask from "../ModalOfTask/ModalOfTask";


function TaskMenu({todo, editTask, deleteTask, isOpen, setIsOpen}){
    const [isOpenModal, setIsOpenModal] = useState(false);

    return(
        <>
        <div className={` shadow-sm rounded-lg ${isOpen  ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-1.5'} bg-white w-1/6 p-3 text-lg font-medium transition-all duration-600 delay-100 ease-in-out `}>
            <div 
                className="cursor-pointer flex items-center gap-x-2"
                onClick={() => {setIsOpen(!isOpen); setIsOpenModal(!isOpenModal); }}
            >
                <AiOutlineEdit color={todo.color} />
                Edit 
            </div>
            <div 
                className="cursor-pointer flex items-center gap-x-2"
                onClick={() => {setIsOpen(!isOpen); deleteTask(todo.id);}}
            >
                <AiOutlineDelete  color={todo.color} />
                Delete
            </div>
           
        </div>
       
            <ModalOfTask 
            currentTask = {todo}
            editTask={editTask}
            isOpenModal = {isOpenModal}
            setIsOpenModal = {setIsOpenModal}
            />
    </>
        
    
    )
}

export default TaskMenu;