import React, { useContext, useEffect, useRef, useState } from 'react'
import RegisterForm from '../RegisterForm/RegisterForm'
import LoginForm from '../LoginForm/LoginForm'
import Typed from 'typed.js';
import styled from 'styled-components';
import { ThemeContext } from '../context';
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);

  .auth__container {
    display: flex;
    gap: 40px;

    a {
      color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
      text-decoration: none;
      font-size: 18px;
      font-weight: 550;
    }
  }
`

const Title = styled.div`
margin-bottom: 50px;
  span {
    font-size: 64px;
    font-family: "Tektur", sans-serif !important;
    font-weight: 550;
    span {
      color: #9000FF;
    }
  }
`

export default function Home() {
    const [activePage, setActivePage] = useState(null)
    const title = useRef(null);
    const { theme } = useContext(ThemeContext);
    const typedInstance = useRef(null);

    useEffect(() => {
      if (activePage === null) {
          typedInstance.current = new Typed(title.current, {
              strings: ['Hello there!', 'Lets make your <span>life</span> easier'],
              typeSpeed: 70,
          });
      }

      return () => {
          if (typedInstance.current) {
              typedInstance.current.destroy();
              typedInstance.current = null;
          }
      };
  }, [activePage]);

  return (
    <HomeContainer theme={theme}>
      {activePage === null && <Title>
       <span ref={title} /><br />
      </Title>}
        <div className='auth__container'>
            <a href='#' onClick={() => setActivePage('Register')}>Sign Up</a><br />
            <a href='#' onClick={() => setActivePage('Login')}>Sign In</a>
        </div>

        {activePage === 'Register' && <RegisterForm onCancel={() => setActivePage(null)}/>}
        {activePage === 'Login' && <LoginForm/>}
        
    </HomeContainer>

  )
}
