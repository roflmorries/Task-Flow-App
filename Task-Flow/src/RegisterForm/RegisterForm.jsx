import React, { useState, useContext } from 'react';
import { Button, Input, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { AuthContext } from '../context';

export default function RegisterForm({ onCancel }) {
    const { users, setUsers } = useContext(AuthContext);
    console.log(users)

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

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
        <form>
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
            >
                <Button icon={<UploadOutlined />}>Upload Avatar</Button>
            </Upload>
            {avatar && <img src={avatar} alt="Avatar Preview" style={{ width: 100, marginTop: 10 }} />}
            <Button onClick={handleRegister}>Register</Button>
            <Button onClick={onCancel}>Cancel</Button>
        </form>
    );
}