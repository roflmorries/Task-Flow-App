import React, { useState } from 'react'
import { Button, Input, Select, Popconfirm } from 'antd';
import { TaskContainer, TasksContainer, ButtonContainer, EditButton } from './TasksList.styles';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, removeTodo } from '../../store/slices/todosSlice';
import { LANGUAGES } from '../../constants';



export default function TasksList() {
  const [editingID, setEditingID] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [editPriority, setEditPriority] = useState('');
  const [editStatus, setEditStatus] = useState('');
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const language = useSelector((state) => state.language.language);
  const todos = useSelector((state) => state.todos.todos)


  const handleEditTask = (todo) => {
    setEditingID(todo.id);
    setEditValue(todo.value);
    setEditPriority(todo.priority);
    setEditStatus(todo.status);
  }

  const handleSaveTask = () => {
    const updatedTodo = { id: editingID ,value: editValue, priority: editPriority, status: editStatus };
    dispatch(editTodo(updatedTodo))
    setEditingID(null);
    setEditValue('');
    setEditPriority('');
    setEditStatus('');
  }

  const handleDeleteTask = id => {
    dispatch(removeTodo(id));
  }

  return (
    <TasksContainer>
      {
      todos.length === 0 ? (
        <p style={{ textAlign: 'center',position: 'absolute',top: '50%' , fontSize: '18px', color: theme === 'light' ? '#000' : '#fff' }}>
          {language === LANGUAGES.EN.value ? "No tasks available. Add a new task!" : "Нет задач. Добавьте новую задачу!"}
        </p>
      ) : (
      todos.map((todo) => 
      <TaskContainer theme={theme} key={todo.id}>
      {editingID === todo.id ? (
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
            <Select.Option value="High">{language === LANGUAGES.EN.value ? "High" : "Высокий"}</Select.Option>
            <Select.Option value="Medium">{language === LANGUAGES.EN.value ? "Medium" : "Средний"}</Select.Option>
            <Select.Option value="Low">{language === LANGUAGES.EN.value ? "Low" : "Низкий"}</Select.Option>
          </Select>
          <Select 
            value={editStatus} 
            onChange={value => setEditStatus(value)} 
            placeholder="Status"
            className='edit__select'
          >
            <Select.Option value="Pending">{language === LANGUAGES.EN.value ? "Pending" : "Ожидание"}</Select.Option>
            <Select.Option value="In Progress">{language === LANGUAGES.EN.value ? "In Progress" : "В процессе"}</Select.Option>
            <Select.Option value="Completed">{language === LANGUAGES.EN.value ? "Completed" : "Выполнено"}</Select.Option>
          </Select>
          <div className='edit-buttons__container'>
          <Button className='edit__buttons' onClick={() => handleSaveTask(todo)}>Save</Button>
          <Button className='edit__buttons' onClick={() => setEditingID(null)}>Cancel</Button>
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
            <EditButton theme={theme} className='edit__button' onClick={() => handleEditTask(todo)}>{language === LANGUAGES.EN.value ? "Edit" : "Изменить"}</EditButton>
            <Popconfirm
                        title={language === LANGUAGES.EN.value ? "Delete the taks" : "Удалить задачу"}
                        description={language === LANGUAGES.EN.value ? "Are you sure you want to delete this task?" : "Вы уверенны что хотите удалить задачу?"}
                        onConfirm={() => handleDeleteTask(todo.id)}
                        okText={language === LANGUAGES.EN.value ? "Yes" : "Да"}
                        cancelText={language === LANGUAGES.EN.value ? "No" : "Нет"}
                        
                        >
                        <Button className='delete__button' danger>{language === LANGUAGES.EN.value ? "Delete" : "Удалить"}</Button>
                    </Popconfirm>
          </ButtonContainer>
        </>
      )}
    </TaskContainer>
      ))}
    </TasksContainer>
    
  )
}
