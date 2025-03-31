import React, { useContext, useState } from 'react';
import { AuthContext } from '../context';
import { Button, Input } from "antd";

export default function LoginForm() {
    const { setIsAuth, users, setUsers } = useContext(AuthContext);
    console.log(users)

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
        <form>
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
        </form>
    );
}