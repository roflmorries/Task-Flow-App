import React, { useState } from 'react';
import { Button, Input } from "antd";
import { StyledForm } from './LoginForm.styles'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/slices/authSlice';

export default function LoginForm() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.auth.users);
    const theme = useSelector((state) => state.theme.theme);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        const userIndex = users.findIndex(user => user.login === login && user.password === password);

        if (userIndex !== -1) {
            const updatedUsers = users.map((user, index) => ({
                ...user,
                isLoggedIn: index === userIndex,
            }));
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            dispatch(setUser(users[userIndex]))
            setError('');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <StyledForm theme={theme}>
            {error && <span className="error">{error}</span>}
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
            <Button onClick={handleLogin}>Sign in</Button>
        </StyledForm>
    );
}