import React, { useContext } from 'react'
import { AuthContext } from '../context'
import LoginForm from '../LoginForm/LoginForm'
import TodoApp from '../TodoApp/TodoApp'
import Home from '../Home/Home'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  /* max-height: 90vh; */
`

export default function Content() {
    const { setIsAuth, isAuth, users, setUsers } = useContext(AuthContext);

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
        {isAuth && <button onClick={handleLogOut}>LogOut</button>}
    </ContentWrapper>
  )
}
