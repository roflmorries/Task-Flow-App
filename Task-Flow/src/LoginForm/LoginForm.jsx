import React, { useContext, useState } from 'react';
import { AuthContext } from '../context';
import { Button, Input } from "antd";
import styled from 'styled-components';
import { ThemeContext } from '../context';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 100px;
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
        margin-top: 20px;
        height: 35px;

        &:hover {
            background-color: #7200cc;
        }
    }
`

export default function LoginForm() {
    const { setIsAuth, users, setUsers } = useContext(AuthContext);
    console.log(users)

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {theme, setTheme} = useContext(ThemeContext);

    const handleLogin = () => {
        const userIndex = users.findIndex(user => user.login === login && user.password === password);

        if (userIndex !== -1) {
            // Mark the current user as logged in
            const updatedUsers = users.map((user, index) => ({
                ...user,
                isLoggedIn: index === userIndex, // Only the logged-in user gets this flag
            }));
            setUsers(updatedUsers); // Update users in context
            localStorage.setItem('users', JSON.stringify(updatedUsers)); // Persist to localStorage
            setIsAuth(true); // Set authentication state
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