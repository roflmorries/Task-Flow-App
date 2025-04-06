import React, { useEffect, useRef, useState } from 'react'
import RegisterForm from '../RegisterForm/RegisterForm'
import LoginForm from '../LoginForm/LoginForm'
import Typed from 'typed.js';
import {HomeContainer, Title} from './Home.styles';
import { useSelector } from 'react-redux';
import { LANGUAGES } from '../constants';

export default function Home() {
    const [activePage, setActivePage] = useState(null)
    const title = useRef(null);
    const typedInstance = useRef(null);
    const theme = useSelector((state) => state.theme.theme);
    const language = useSelector((state) => state.language.language);
    

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
            <a href='#' onClick={() => setActivePage('Register')}>{language === LANGUAGES.EN.value ? "Sign Up" : "Создать"}</a><br />
            <a href='#' onClick={() => setActivePage('Login')}>{language === LANGUAGES.EN.value ? "Sign In" : "Войти"}</a>
        </div>

        {activePage === 'Register' && <RegisterForm onCancel={() => setActivePage(null)}/>}
        {activePage === 'Login' && <LoginForm/>}
        
    </HomeContainer>

  )
}
