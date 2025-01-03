import { useState } from "react";
import Input from './../Input/Input'
import Button from "../Button/Button";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { generateRandomColor } from "../utils/generateRandomColor";
import { formatDateToLocal } from "../utils/formateDateToLocal";

function ModalOfTask({ todos, addTask, editTask,  isOpenModal, setIsOpenModal, currentTask}) {

  const [inputedDate, setInputedDate] = useState(currentTask ? formatDateToLocal(currentTask.date) : '');
  const [inputedTask, setInputedTask] = useState(currentTask ? currentTask.title : '');
  const [taskError, setTaskError] = useState('');
  const [dateError, setDateError] = useState('');

  function handleSave() {
    if(inputedTask.trim() === ''){
      setTaskError('Please enter a task title');
      return;
    } else {
      setTaskError('')
    }

    if(!inputedDate){
      setDateError('Please enter a date');
      return;
    } else {
      setDateError('')
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
    if(!dateRegex.test(inputedDate)){
      setDateError('Invalid date format');
      return;
    } else {
      setDateError('')
    }

    if (currentTask) {
      editTask({ ...currentTask, title: inputedTask, date: new Date(inputedDate) });
    } else {
      addTask({
        id: todos.length + 1, 
        title: inputedTask,
        completed: false,
        date: new Date(inputedDate),
        color: generateRandomColor(),
      });
    }
    setInputedDate('');
    setInputedTask('');
    setIsOpenModal(false);
   
  }

  return (
    <div className={`${isOpenModal ? 'opacity-100  visible' : 'opacity-0  invisible'} transition-all duration-700 ease-in-out h-screen z-10 w-full absolute top-0 left-0 bg-black bg-opacity-40`}>
       <div className={`${isOpenModal ? 'translate-y-0' : 'translate-y-1/2'} transition-all duration-700  ease-in-out mx-auto my-40 bg-white w-96 rounded-lg h-96 p-5 flex flex-col gap-y-5 items-center justify-center relative`}>
        <h2 className="text-3xl font-bold">Enter you task</h2>
        <Input 
          type="text"
          placeholder="Enter your task..."
          inputedValue ={inputedTask}
          setInputedValue = {setInputedTask}
          errorMessage= {taskError}
        />
        <Input 
          type="datetime-local"
          inputedValue ={inputedDate}
          setInputedValue = {setInputedDate}
          errorMessage= {dateError}
        />
        <Button 
          handleClick={handleSave}
        >
          Save
          <FaCheck />
        </Button>
        <IoClose 
          onClick={() => setIsOpenModal(!isOpenModal)}
          className="absolute top-5 right-5 cursor-pointer" 
          color="black" 
          size={30} 
        />
       </div>
    </div>
  );
}

export default ModalOfTask;
