import React, { useContext, useState } from 'react';
import { AuthContext } from '../context';
import { Button, Input } from "antd";
import { ThemeContext } from '../context';
import {StyledForm} from './LoginForm.styles'

export default function LoginForm() {
    const { setIsAuth, users, setUsers } = useContext(AuthContext);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {theme, setTheme} = useContext(ThemeContext);

    const handleLogin = () => {
        const userIndex = users.findIndex(user => user.login === login && user.password === password);

        if (userIndex !== -1) {
            const updatedUsers = users.map((user, index) => ({
                ...user,
                isLoggedIn: index === userIndex,
            }));
            setUsers(updatedUsers);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            setIsAuth(true);
            localStorage.setItem('isAuth', true)
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