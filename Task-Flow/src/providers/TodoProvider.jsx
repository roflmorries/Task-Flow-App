import React, { useEffect, useState } from 'react'
import { TodosContext } from '../context'

export default function TodoProvider({children}) {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) {
            setTodos(savedTodos)
        }
    }, [])

    const addNewTodo = (value, priority = 'Medium', status = 'Pending') => {
        const newTodos = [...todos, {value, priority, status}];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const editTodo = (index, newValue) => {
        const updatedTodo = todos.map((todo, i) => i === index ? newValue : todo );
        setTodos(updatedTodo)
        localStorage.setItem('todos', JSON.stringify(updatedTodo))
    }

    const deleteTodo = index => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

  return (
    <TodosContext.Provider value={{todos, addNewTodo, editTodo, deleteTodo}}>
        {children}
    </TodosContext.Provider>
  )
}
