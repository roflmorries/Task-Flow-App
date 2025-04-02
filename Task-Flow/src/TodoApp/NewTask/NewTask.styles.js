import styled from "styled-components"
import { Select, Modal } from 'antd';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 20px 0 20px 0;
  button {
    margin-top: 20px;
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 500;
    box-shadow: none;
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')} !important;

    &:hover {
      background: none !important;
    }
  }
`

export const CustomSelect = styled(Select)`
  .ant-select-selector {
    background-color: ${({ theme }) => (theme === 'light' ? 'white' : '#2c2c2e')} !important; /* Цвет фона */
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')} !important; /* Цвет текста */
    border: 1px solid ${({ theme }) => (theme === 'light' ? '#d9d9d9' : '#444')} !important; /* Цвет рамки */
    border-radius: 4px; /* Скругление углов */
    padding: 10px; /* Отступы внутри */
    display: flex;
    align-items: center; /* Центрирование текста */
  }

  .ant-select-arrow {
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')} !important; /* Цвет стрелки */
  }

  .ant-select-dropdown {
    background-color: ${({ theme }) => (theme === 'light' ? 'white' : '#2c2c2e')} !important; /* Цвет выпадающего списка */
    border-radius: 4px; /* Скругление углов */
  }

  .ant-select-item {
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')} !important; /* Цвет текста элементов */
  }

  .ant-select-item-option-selected {
    background-color: ${({ theme }) => (theme === 'light' ? '#e6f7ff' : '#444')} !important; /* Цвет выбранного элемента */
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')} !important; /* Цвет текста выбранного элемента */
  }

  .ant-select-selection-placeholder {
    color: ${({ theme }) => (theme === 'light' ? '#a9a9a9' : '#888')} !important;
  }
`

export const CustomModal = styled(Modal)`

  form {
    .select__container {
      display: flex;
      gap: 40px;
    }
  }
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
        width: 100%;
        padding: 10px;
        border: 1px solid ${({ theme }) => (theme === 'light' ? '#d9d9d9' : '#444')};
        border-radius: 4px;
        background-color: ${({ theme }) => (theme === 'light' ? 'white' : '#2c2c2e')};
        color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
        font-size: 16px;
        &::placeholder{
            color: ${({ theme }) => (theme === 'light' ? '#a9a9a9' : '#888')} !important;
            text-align: center;
        }
        &:focus {
            border-color: white;
            background-color: ${({ theme }) => (theme === 'light' ? 'white' : '#2c2c2e')};
            outline: none;
            box-shadow: 0 0 4px white;
        }
        &:hover {
            border-color: white;
            background-color: ${({ theme }) => (theme === 'light' ? 'white' : '#2c2c2e')};
            outline: none;
            box-shadow: 0 0 4px white;
        }

    }
    div {
      width: 100%;
    }
    button {
        margin-top: 10px;
        background-color: #9000FF;
        color: white;
        border: none;
        padding: 10px 16px;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        /* margin-top: 20px; */
        height: 35px;
        width: 100%;

        &:hover {
            background-color: #7200cc;
        }
    }
    }
  }

  .ant-modal-content {
    border-radius: 10px;
    border: 4px solid rgba( 255, 255, 255, 0.25 );
    border-image-slice: 1;
    transition: border 0.5s ease-in-out; 
    color: white;
    background: ${({ theme }) => (theme === 'light' ? '#f0f0f0' : '#242526')} !important;
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