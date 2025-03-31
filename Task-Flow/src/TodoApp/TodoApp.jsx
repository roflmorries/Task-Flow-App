import React from 'react'
import NewTask from './NewTask/NewTask'
import TasksList from './TasksList/TasksList'
import TodoProvider from '../providers/TodoProvider'

export default function TodoApp() {
  return (
    <div>
        <TodoProvider>
            <NewTask/>
            <TasksList/>
        </TodoProvider>
    </div>
  )
}
