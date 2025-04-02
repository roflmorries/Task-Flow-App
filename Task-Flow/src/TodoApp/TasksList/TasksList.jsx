import React, { useContext, useState } from 'react'
import { TodosContext, LANGUAGES, LanguageContext } from '../../context'
import { Button, Input, Select, Popconfirm } from 'antd';
import { TaskContainer, TasksContainer, ButtonContainer, EditButton } from './TasksList.styles';
import { ThemeContext } from '../../context';



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
