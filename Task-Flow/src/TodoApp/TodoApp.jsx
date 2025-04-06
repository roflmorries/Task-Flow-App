import React from 'react'
import NewTask from './NewTask/NewTask'
import TasksList from './TasksList/TasksList'

export default function TodoApp() {
  return (
    <div>
        <>
            <NewTask/>
            <TasksList/>
        </>
    </div>
  )
}
