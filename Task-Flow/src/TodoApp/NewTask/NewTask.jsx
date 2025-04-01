import React, { useContext, useState } from 'react'
import { TodosContext, LANGUAGES, LanguageContext } from '../../context'
import { Button, Input, Select, Modal } from "antd";
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 20px 0 20px 0;
`

const CustomModal = styled(Modal)`
  .ant-modal {
    width: 100% !important;
    background: #1e1e2f;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .ant-modal-header {
    background: #10171b;
    border-bottom: none;
    border-radius: 12px 12px 0 0;
  }

  .ant-modal-title {
    font-size: 20px;
  }

  .ant-modal-body {
    form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    input {
      
    }
    div {
      width: 100%;
    }
    button {
      width: 100%;
    }
    }
  }

  .ant-modal-content {
    border-radius: 17px;
    border: 4px solid rgba( 255, 255, 255, 0.25 );
    border-image-slice: 1;
    transition: border 0.5s ease-in-out; 
    color: white;
    background: rgba( 255, 255, 255, 0.08 );
    backdrop-filter: blur( 9px );
    -webkit-backdrop-filter: blur( 9px );
    padding: 70px;
    /* min-height: 750px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .ant-modal-close {
    color: #FF1300;
  }

  .ant-modal-footer {
    border-top: none;
    padding: 16px;
    border-radius: 0 0 12px 12px;
  }
`


export default function NewTask() {
    const [value, setValue] = useState('');
    const {addNewTodo} = useContext(TodosContext);
    const [status, setStatus] = useState('Pending');
    const [priority, setPriority] = useState('Medium');
    const { language } = useContext(LanguageContext);
    const [modal2Open, setModal2Open] = useState(false);

    const handleSaveValue = () => {
        addNewTodo(value)
        setValue('')
    }
  return (
    <>
    <ButtonWrapper>
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
      >
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
      </CustomModal>
    </>
  )
}
