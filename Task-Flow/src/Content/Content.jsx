import React, { useContext } from 'react'
import TodoApp from '../TodoApp/TodoApp'
import Home from '../Home/Home'
import {UsergroupDeleteOutlined} from '@ant-design/icons';
import { ContentWrapper, LogOutButton } from './Content.styles';
import { setUser, logOut } from '../store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Content() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.user !== null);
    const users = useSelector((state) => state.auth.users);
    const theme = useSelector((state) => state.theme.theme);

    const handleLogOut = () => {
      const updatedUsers = users.map(user => ({ ...user, isLoggedIn: false }));
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      dispatch(logOut());
      dispatch(setUser(null));
      localStorage.setItem('isAuth', false);
  }
  return (
    <ContentWrapper>
        {isAuth ? <TodoApp/> : <Home/>}
        {isAuth && <LogOutButton onClick={handleLogOut} theme={theme}><UsergroupDeleteOutlined /></LogOutButton>}
    </ContentWrapper>
  )
}
