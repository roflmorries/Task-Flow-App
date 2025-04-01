import React, { useState, useContext } from 'react';
import { Button, Input, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { AuthContext } from '../context';
import styled from 'styled-components';
import { ThemeContext } from '../context';


const StyledForm = styled.form`
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

export default function RegisterForm({ onCancel }) {
    const { users, setUsers } = useContext(AuthContext);
    console.log(users)

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const {theme, setTheme} = useContext(ThemeContext);
    

    const handleAvatarUpload = ({ file }) => {
        const reader = new FileReader();
        reader.onload = () => {
            setAvatar(reader.result); // Store the Base64 string of the uploaded image
        };
        reader.readAsDataURL(file);
    };

    const handleRegister = () => {
        if (users.some(user => user.login === login)) {
            setError('User already exists');
        } else if (login && password) {
            const newUser = { login, password, avatar };
            setUsers([...users, newUser]); // Update users in context
            setSuccess(true);
            setError('');
        } else {
            setError('Please fill in all fields');
        }
    };

    return (
        <StyledForm theme={theme}>
            {error && <span className="error">{error}</span>}
            {success && <span className="success">Registration successful! You can now log in.</span>}
            <Input
                placeholder="Enter your login"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
            />
            <Input
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <Upload
                beforeUpload={() => false} // Prevent automatic upload
                onChange={handleAvatarUpload}
                accept="image/*"
                showUploadList={false}
            >
                <Button icon={<UploadOutlined />}>Upload Avatar</Button>
            </Upload>
            {avatar && <img src={avatar} alt="Avatar Preview" style={{ width: 100, marginTop: 10 }} />}
            <Button onClick={handleRegister}>Register</Button>
            <Button className='cancel__button' onClick={onCancel}>Cancel</Button>
        </StyledForm>
    );
}