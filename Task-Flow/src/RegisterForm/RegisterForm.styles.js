import styled from "styled-components"

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 100px;
    align-items: center;
    input {
        width: 400px;
        padding: 10px;
        border: 1px solid ${({ theme }) => (theme === 'light' ? '#d9d9d9' : '#444')};
        border-radius: 4px;
        background-color: ${({ theme }) => (theme === 'light' ? 'white' : '#2c2c2e')};
        color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
        font-size: 16px;
        &::placeholder{
            color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
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
    button {
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
    .cancel__button {
        background-color: ${({ theme }) => (theme === 'light' ? 'white' : '#2c2c2e')};
        color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
        border: 1px solid ${({ theme }) => (theme === 'light' ? '#d9d9d9' : '#444')} !important; /* Совпадает с input */
        border-radius: 4px;
        padding: 10px 16px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            border-color: white;
            box-shadow: 0 0 4px white;
        }
    }
`