import React, { useContext } from 'react'
import { AuthContext } from '../context'
import TodoApp from '../TodoApp/TodoApp'
import Home from '../Home/Home'
import {UsergroupDeleteOutlined} from '@ant-design/icons';
import { ThemeContext } from '../context'
import { ContentWrapper, LogOutButton } from './Content.styles'

export default function Content() {
    const { setIsAuth, isAuth, users, setUsers } = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);

    const handleLogOut = () => {
      const updatedUsers = users.map(user => ({ ...user, isLoggedIn: false }));
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setIsAuth(false);
      localStorage.setItem('isAuth', false);
  }
  return (
    <ContentWrapper>
        {isAuth ? <TodoApp/> : <Home/>}
        {isAuth && <LogOutButton onClick={handleLogOut} theme={theme}><UsergroupDeleteOutlined /></LogOutButton>}
    </ContentWrapper>
  )
}
