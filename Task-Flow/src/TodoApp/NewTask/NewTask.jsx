import React, { useState } from 'react'
import { Button, Input } from "antd";
import { ButtonWrapper, CustomSelect, CustomModal } from './NewTask.styles';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../store/slices/todosSlice';
import { LANGUAGES } from '../../constants';


export default function NewTask() {
    const [value, setValue] = useState('');
    const [status, setStatus] = useState(undefined);
    const [priority, setPriority] = useState(undefined);
    const [modal2Open, setModal2Open] = useState(false);

    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);
    const language = useSelector((state) => state.language.language);


    const handleSaveValue = () => {
      if (!value || !priority || !status) {
        return;
      }
        const newTodo = {id: uuidv4(), value, priority, status};
        dispatch(addTodo(newTodo));
        setValue('');
        setPriority(undefined);
        setStatus(undefined);
        setModal2Open(false);
    }
  return (
    <>
    <ButtonWrapper theme={theme}>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        {language === LANGUAGES.EN.value ? "Add new Task" : "Добавить задачу"}
      </Button>
    </ButtonWrapper>
      <CustomModal
          style={{ top: 20 }}
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          theme={theme}
          footer={null}
      >
          <form>
          <Input placeholder="Enter what you wanna do" value={value} onChange={event => setValue(event.target.value)} />
          <div className='select__container'>
          <CustomSelect
          value={priority}
          onChange={value => setPriority(value)}
          placeholder='Priority'
          theme={theme}
          options={[
            {value: 'High', label: language === LANGUAGES.EN.value ? "High" : "Высокий"},
            {value: 'Medium', label: language === LANGUAGES.EN.value ? "Medium" : "Средний"},
            {value: 'Low', label: language === LANGUAGES.EN.value ? "Low" : "Низкий"}
          ]}>
          </CustomSelect>
          <CustomSelect
          value={status}
          onChange={value => setStatus(value)}
          placeholder='Status'
          theme={theme}
          options={[
            {value: 'Pending', label: language === LANGUAGES.EN.value ? "Pending" : "В ожидании"},
            {value: 'In Progress', label: language === LANGUAGES.EN.value ? "In Progress" : "В процессе"},
            {value: 'Completed', label: language === LANGUAGES.EN.value ? "Completed" : "Выполнено"}
          ]}>
          </CustomSelect>
          </div>
          <Button onClick={handleSaveValue}>{language === LANGUAGES.EN.value ? "Save" : "Сохранить"}</Button>
        </form>
      </CustomModal>
    </>
  )
}
