import React, { useContext, useState } from 'react'
import { TodosContext, LANGUAGES, LanguageContext } from '../../context'
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
  const { language } = useContext(LanguageContext);

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
            <Option value="High">{language === LANGUAGES.EN.value ? "High" : "Высокий"}</Option>
            <Option value="Medium">{language === LANGUAGES.EN.value ? "Medium" : "Средний"}</Option>
            <Option value="Low">{language === LANGUAGES.EN.value ? "Low" : "Низкий"}</Option>
          </Select>
          <Select 
            value={editStatus} 
            onChange={value => setEditStatus(value)} 
            placeholder="Status"
          >
            <Option value="Pending">{language === LANGUAGES.EN.value ? "Pending" : "Ожидание"}</Option>
            <Option value="In Progress">{language === LANGUAGES.EN.value ? "In Progress" : "В процессе"}</Option>
            <Option value="Completed">{language === LANGUAGES.EN.value ? "Completed" : "Выполнено"}</Option>
          </Select>
          <Button onClick={() => handleSaveTask(index)}>Save</Button>
          <Button onClick={() => setEditingIndex(null)}>Cancel</Button>
        </>
      ) : (
        <>
          <p><strong>{language === LANGUAGES.EN.value ? "Task" : "Задача"}:</strong> {todo.value}</p>
          <p><strong>{language === LANGUAGES.EN.value ? "Priority" : "Приоритет"}:</strong> {todo.priority}</p>
          <p><strong>{language === LANGUAGES.EN.value ? "Status" : "Статус"}:</strong> {todo.status}</p>
          <Button onClick={() => handleEditTask(index, todo)}>{language === LANGUAGES.EN.value ? "Edit" : "Редактировать"}</Button>
          <Button onClick={() => handleDeleteTask(index)}>{language === LANGUAGES.EN.value ? "Delete" : "Удалить"}</Button>
        </>
      )}
    </TaskContainer>
      )}
    </TasksContainer>
    
  )
}
