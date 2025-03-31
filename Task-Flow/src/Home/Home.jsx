import React, { useState } from 'react'
import RegisterForm from '../RegisterForm/RegisterForm'
import LoginForm from '../LoginForm/LoginForm'

export default function Home() {
    const [activePage, setActivePage] = useState(null)
  return (
    <div>
        <div>
            <a onClick={() => setActivePage('Register')}>Sign Up</a><br />
            <a onClick={() => setActivePage('Login')}>Sign In</a>
        </div>

        {activePage === 'Register' && <RegisterForm/>}
        {activePage === 'Login' && <LoginForm/>}
        
    </div>

  )
}
