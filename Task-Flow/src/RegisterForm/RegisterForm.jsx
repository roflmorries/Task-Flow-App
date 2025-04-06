import React, { useState } from 'react';
import { Button, Input, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { StyledForm } from './RegisterForm.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/slices/authSlice';
import { v4 as uuidv4 } from 'uuid';

export default function RegisterForm({ onCancel }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.auth.users);
    const theme = useSelector((state) => state.theme.theme);
    

    const handleAvatarUpload = ({ file }) => {
        const reader = new FileReader();
        reader.onload = () => {
            setAvatar(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleRegister = () => {
        if (users.some(user => user.login === login)) {
            setError('User already exists');
        } else if (login && password) {
            const newUser = { id: uuidv4(), login, password, avatar, isLoggedIn: false };
            dispatch(addUser(newUser));
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
                beforeUpload={() => false}
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