import React, { useContext, useState } from 'react'
import { TodosContext } from '../../context'
import { Button, Input, Select } from 'antd';
import styled from 'styled-components';

const TaskContainer = styled.div`
  display: flex;
  width: 300px;
  height: 200px;
  background-color: wheat;
  flex-direction: column;
`

const TasksContainer = styled.div`
  display: flex;
  gap: 30px;
`

export default function TasksList() {
  const {todos, editTodo, deleteTodo} = useContext(TodosContext);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [editPriority, setEditPriority] = useState('');
  const [editStatus, setEditStatus] = useState('');

  const handleEditTask = (index, todo) => {
    setEditingIndex(index);
    setEditValue(todo.value);
    setEditPriority(todo.priority);
    setEditStatus(todo.status);
  }

  const handleSaveTask = index => {
    const updatedTodo = { value: editValue, priority: editPriority, status: editStatus };
    editTodo(index, updatedTodo);
    setEditingIndex(null);
    setEditValue('');
    setEditPriority('');
    setEditStatus('');
  }

  const handleDeleteTask = index => {
    deleteTodo(index)
  }

  return (
    <TasksContainer>
      {todos.map((todo, index) => 
      <TaskContainer key={index}>
      {editingIndex === index ? (
        <>
          <Input 
            value={editValue} 
            onChange={e => setEditValue(e.target.value)} 
            placeholder="Task Name"
          />
          <Select 
            value={editPriority} 
            onChange={value => setEditPriority(value)} 
            placeholder="Priority"
          >
            <Option value="High">High</Option>
            <Option value="Medium">Medium</Option>
            <Option value="Low">Low</Option>
          </Select>
          <Select 
            value={editStatus} 
            onChange={value => setEditStatus(value)} 
            placeholder="Status"
          >
            <Option value="Pending">Pending</Option>
            <Option value="In Progress">In Progress</Option>
            <Option value="Completed">Completed</Option>
          </Select>
          <Button onClick={() => handleSaveTask(index)}>Save</Button>
          <Button onClick={() => setEditingIndex(null)}>Cancel</Button>
        </>
      ) : (
        <>
          <p><strong>Task:</strong> {todo.value}</p>
          <p><strong>Priority:</strong> {todo.priority}</p>
          <p><strong>Status:</strong> {todo.status}</p>
          <Button onClick={() => handleEditTask(index, todo)}>Edit</Button>
          <Button onClick={() => handleDeleteTask(index)}>Delete</Button>
        </>
      )}
    </TaskContainer>
      )}
    </TasksContainer>
    
  )
}
