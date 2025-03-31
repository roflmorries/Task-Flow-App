import React, { useContext, useState } from 'react'
import { TodosContext, LANGUAGES, LanguageContext } from '../../context'
import { Button, Input, Select } from "antd";


export default function NewTask() {
    const [value, setValue] = useState('');
    const {addNewTodo} = useContext(TodosContext);
    const [status, setStatus] = useState('Pending');
    const [priority, setPriority] = useState('Medium');
    const { language } = useContext(LanguageContext);

    const handleSaveValue = () => {
        addNewTodo(value)
        setValue('')
    }
  return (
    <div>
        <form>
        <Input placeholder="Enter what you wanna do" value={value} onChange={event => setValue(event.target.value)} />
        <Select
        value={priority}
        onChange={value => setPriority(value)}
        placeholder='Priority'
        options={[
          {value: 'High', label: language === LANGUAGES.EN.value ? "High" : "Высокий"},
          {value: 'Medium', label: language === LANGUAGES.EN.value ? "Medium" : "Средний"},
          {value: 'Low', label: language === LANGUAGES.EN.value ? "Low" : "Низкий"}
        ]}>
        </Select>
        <Select
        value={status}
        onChange={value => setStatus(value)}
        placeholder='Status'
        options={[
          {value: 'Pending', label: language === LANGUAGES.EN.value ? "Pending" : "В ожидании"},
          {value: 'In Progress', label: language === LANGUAGES.EN.value ? "In Progress" : "В процессе"},
          {value: 'Completed', label: language === LANGUAGES.EN.value ? "Comoleted" : "Выполнено"}
        ]}>
        </Select>
        <Button onClick={handleSaveValue}>{language === LANGUAGES.EN.value ? "Save" : "Сохранить"}</Button>
      </form>
    </div>
  )
}
