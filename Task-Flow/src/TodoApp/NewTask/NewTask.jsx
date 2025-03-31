import React, { useContext, useState } from 'react'
import { TodosContext } from '../../context'
import { Button, Input, Select } from "antd";


export default function NewTask() {
    const [value, setValue] = useState('');
    const {addNewTodo} = useContext(TodosContext);
    const [status, setStatus] = useState('Pending');
    const [priority, setPriority] = useState('Medium');

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
          {value: 'High', label: 'High'},
          {value: 'Medium', label: 'Medium'},
          {value: 'Low', label: 'Low'}
        ]}>
        </Select>
        <Select
        value={status}
        onChange={value => setStatus(value)}
        placeholder='Status'
        options={[
          {value: 'Pending', label: 'Pending'},
          {value: 'In Progress', label: 'In Progress'},
          {value: 'Completed', label: 'Completed'}
        ]}>
        </Select>
        <Button onClick={handleSaveValue}>Save</Button>
      </form>
    </div>
  )
}
