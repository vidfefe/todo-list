import Button from './../Button/Button'
import { FaPlus } from "react-icons/fa6";
import TodoItem from './TodoItem';
import { useState } from 'react';
import ModalOfTask from '../ModalOfTask/ModalOfTask';
import { getDayTitle } from '../utils/getDayTitle';
import ProgressBar from '../ProgressBar/ProgressBar';


function TodoList({todos, setTodos, currentDate}) {
   const [isOpenModal, setIsOpenModal] = useState(false);

   const filteredTodos = todos.filter(todo => todo.date.toDateString() === currentDate.toDateString());

   function handleToggleCompleted (id){
      setTodos(
         todos.map((todo) => {
            if (todo.id === id) {
               return { 
                  ...todo, 
                  completed: !todo.completed
               }
            } else {
               return todo;
            }
         })
      )
   }

   function handleEditTask(editedTask){
      setTodos( todos.map(todo => todo.id === editedTask.id ? editedTask : todo));
      
   }

   
  function handleAddTask(newTask){
   setTodos([
     ...todos,
      newTask
   ]);

}

   function handleDeleteTask(id){
      setTodos( todos.filter(todo => todo.id !== id ))
   }

    return (
      <div className="w-full">
         <div className=" flex justify-between items-center mb-5 pb-7 border-b-2 border-b-gray-300 rounded-lg">
            <h1 className=" text-6xl font-bold ">{getDayTitle(currentDate)}</h1>
            <Button handleClick = {() => setIsOpenModal(!isOpenModal)}>
                Add task 
                <FaPlus />
            </Button>
         </div>
            {filteredTodos.length === 0 ? (
               <p className="font-medium text-xl opacity-60">You have no tasks for this day</p> 
            ) : (
                <ul>
                  <ProgressBar todos = {filteredTodos}/>
                  {filteredTodos.map((todo, index) => (
                     <TodoItem 
                       key={index} 
                       todo ={todo} 
                       toggleCompleted = {handleToggleCompleted}
                       editTask={handleEditTask}
                       deleteTask={handleDeleteTask}
                     />
                  ))}
               </ul>
            )}
         
         <ModalOfTask 
            todos = {todos}
            setTodos = {setTodos}
            addTask={handleAddTask}
            isOpenModal = {isOpenModal}
            setIsOpenModal = {setIsOpenModal}
         />
      </div>
    );


  }
  
  export default TodoList;