import React, { useContext } from 'react'
import { AuthContext } from '../context'
import LoginForm from '../LoginForm/LoginForm'
import TodoApp from '../TodoApp/TodoApp'
import Home from '../Home/Home'

export default function Content() {
    const {isAuth} = useContext(AuthContext)
  return (
    <div>
        {isAuth ? <TodoApp/> : <Home/>}
    </div>
  )
}
