import Layout from './components/Layout/Layout';
import TodoList from './components/TodoList/TodoList';
import Calendar from './components/Calendar/Calendar';
import { useState } from 'react';
import { initialTodos } from './store/data'

function App(){
    const [currentDate, setCurrentDate] = useState(new Date());
    const [todos, setTodos] = useState(initialTodos);

    return(
        <Layout>
            <TodoList
                todos = {todos}
                setTodos={setTodos}
                currentDate = {currentDate}
            />
            <Calendar 
                todos = {todos}
                currentDate = {currentDate}
                setCurrentDate = {setCurrentDate}
            />
        </Layout>
    )
}

export default App;