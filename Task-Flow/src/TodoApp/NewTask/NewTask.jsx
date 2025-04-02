import React, { useContext, useState } from 'react'
import { TodosContext, LANGUAGES, LanguageContext, ThemeContext } from '../../context'
import { Button, Input, Select, Modal } from "antd";
import { ButtonWrapper, CustomSelect, CustomModal } from './NewTask.styles';


export default function NewTask() {
    const [value, setValue] = useState('');
    const {addNewTodo} = useContext(TodosContext);
    const [status, setStatus] = useState(undefined);
    const [priority, setPriority] = useState(undefined);
    const { language } = useContext(LanguageContext);
    const [modal2Open, setModal2Open] = useState(false);
    const { theme } = useContext(ThemeContext);

    const handleSaveValue = () => {
        addNewTodo(value);
        setValue('');
        setPriority(undefined);
        setStatus(undefined);
    }
  return (
    <>
    <ButtonWrapper theme={theme}>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        {language === LANGUAGES.EN.value ? "Add new Task" : "Добавить задачу"}
      </Button>
    </ButtonWrapper>
      <CustomModal
          // title={language === LANGUAGES.EN.value ? "Add new Task" : "Добавить задачу"}
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
            {value: 'Completed', label: language === LANGUAGES.EN.value ? "Comoleted" : "Выполнено"}
          ]}>
          </CustomSelect>
          </div>
          <Button onClick={handleSaveValue}>{language === LANGUAGES.EN.value ? "Save" : "Сохранить"}</Button>
        </form>
      </CustomModal>
    </>
  )
}
