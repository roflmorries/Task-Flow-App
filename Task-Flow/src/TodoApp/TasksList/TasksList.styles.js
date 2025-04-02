import styled from "styled-components"
import { Button } from "antd"

export const TaskContainer = styled.div`
  display: flex;
  padding: 20px;
  width: 22%;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 4px solid rgba( 255, 255, 255, 0.25 );
  border-image-slice: 1;
  transition: border 0.5s ease-in-out; 
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  background: ${({ theme }) => (theme === 'light' ? '#f9f9f9' : '#242526')};
  gap: 20px;
  margin-top: 30px;
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
    /* background: red !important; */
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
  }
`

export const TasksContainer = styled.div`
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
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

`

export const EditButton = styled(Button)`
  height: 40px;
  width: 100px;
  background-color: ${({ theme }) => (theme === 'light' ? 'white' : '#1b1b1d')} !important;
  border: #FF9500;
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')} !important;
`