import React, { useContext, useState } from 'react'
import { TodosContext, LANGUAGES, LanguageContext } from '../../context'
import { Button, Input, Select, Popconfirm } from 'antd';
import styled from 'styled-components';
import { ThemeContext } from '../../context';

const TaskContainer = styled.div`
  display: flex;
  padding: 20px;
  width: 22%;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
  border: 4px solid rgba( 255, 255, 255, 0.25 );
  border-image-slice: 1;
  transition: border 0.5s ease-in-out; 
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  background: ${({ theme }) => (theme === 'light' ? '#f9f9f9' : '#242526')};
  gap: 20px;
  p {
    margin: 0;
  }
  .edit-buttons__container {
    display: flex;
    gap: 20px;
  }
  .edit__buttons {
    height: 40px;
    width: 100px;
    background-color: ${({ theme }) => (theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.2)')};
    border: #FF1300;
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    font-weight: 500;
    padding: 10px 10px 10px 10px;
  }
  &:hover {
    background: red !important;
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
  }
`

const TasksContainer = styled.div`
  display: flex;
  gap: 30px;
  /* height: 100vh; */
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  .delete__button {
    height: 40px;
    width: 100px;
    background-color: white !important;
    border: white;
    color: black;
    font-weight: 500;
    padding: 10px 10px 10px 10px;
  }
.delete__button:hover {

background-color: black !important;
color: white !important;
}
.inner__task {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
}

.edit__input {
  width: 80%;
  border: 2px solid rgba( 255, 255, 255, 0.25 );
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  height: 50px !important;
}
.edit__select {
  width: 80%;
  border: 2px solid rgba( 255, 255, 255, 0.25 );
  background-color: rgba(0, 0, 0, 0) !important;
  color: white;

  .ant-select-selector {
    background-color: rgba(0, 0, 0, 0.2) !important;
    border: 2px solid rgba( 255, 255, 255, 0 );
    color: white;
    width: 80%;
  }
  .ant-select-dropdown {
    background-color: rgba(0, 0, 0, 0.2) !important;
    border: 2px solid rgba( 255, 255, 255, 0.25 );
    color: white;
  }
}
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

`

const EditButton = styled(Button)`
  height: 40px;
  width: 100px;
  background-color: ${({ theme }) => (theme === 'light' ? 'white' : '#1b1b1d')} !important;
  border: #FF9500;
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')} !important;
`

export default function TasksList() {
  const {todos, editTodo, deleteTodo} = useContext(TodosContext);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [editPriority, setEditPriority] = useState('');
  const [editStatus, setEditStatus] = useState('');
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

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
      <TaskContainer theme={theme} key={index}>
      {editingIndex === index ? (
        <>
          <Input 
            value={editValue} 
            onChange={e => setEditValue(e.target.value)} 
            placeholder="Task Name"
            className='edit__input'
          />
          <Select 
            value={editPriority} 
            onChange={value => setEditPriority(value)} 
            placeholder="Priority"
            className='edit__select'
          >
            <Option value="High">{language === LANGUAGES.EN.value ? "High" : "Высокий"}</Option>
            <Option value="Medium">{language === LANGUAGES.EN.value ? "Medium" : "Средний"}</Option>
            <Option value="Low">{language === LANGUAGES.EN.value ? "Low" : "Низкий"}</Option>
          </Select>
          <Select 
            value={editStatus} 
            onChange={value => setEditStatus(value)} 
            placeholder="Status"
            className='edit__select'
          >
            <Option value="Pending">{language === LANGUAGES.EN.value ? "Pending" : "Ожидание"}</Option>
            <Option value="In Progress">{language === LANGUAGES.EN.value ? "In Progress" : "В процессе"}</Option>
            <Option value="Completed">{language === LANGUAGES.EN.value ? "Completed" : "Выполнено"}</Option>
          </Select>
          <div className='edit-buttons__container'>
          <Button className='edit__buttons' onClick={() => handleSaveTask(index)}>Save</Button>
          <Button className='edit__buttons' onClick={() => setEditingIndex(null)}>Cancel</Button>
          </div>
        </>
      ) : (
        <>
          <div className='inner__task'>
            <p><strong>{language === LANGUAGES.EN.value ? "Task" : "Задача"}:</strong> {todo.value}</p>
            <p><strong>{language === LANGUAGES.EN.value ? "Priority" : "Приоритет"}:</strong> {todo.priority}</p>
            <p><strong>{language === LANGUAGES.EN.value ? "Status" : "Статус"}:</strong> {todo.status}</p>
          </div>
          <ButtonContainer>
            <EditButton theme={theme} className='edit__button' onClick={() => handleEditTask(index, todo)}>{language === LANGUAGES.EN.value ? "Edit" : "Изменить"}</EditButton>
            <Popconfirm
                        title={language === LANGUAGES.EN.value ? "Delete the taks" : "Удалить задачу"}
                        description={language === LANGUAGES.EN.value ? "Are you sure you want to delete this task?" : "Вы уверенны что хотите удалить задачу?"}
                        onConfirm={() => handleDeleteTask(index)}
                        okText={language === LANGUAGES.EN.value ? "Yes" : "Да"}
                        cancelText={language === LANGUAGES.EN.value ? "No" : "Нет"}
                        
                        >
                        <Button className='delete__button' danger>{language === LANGUAGES.EN.value ? "Delete" : "Удалить"}</Button>
                    </Popconfirm>
          </ButtonContainer>
        </>
      )}
    </TaskContainer>
      )}
    </TasksContainer>
    
  )
}
