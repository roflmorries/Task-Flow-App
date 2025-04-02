import React, { useContext, useEffect, useRef, useState } from 'react'
import RegisterForm from '../RegisterForm/RegisterForm'
import LoginForm from '../LoginForm/LoginForm'
import Typed from 'typed.js';
import { ThemeContext, LanguageContext, LANGUAGES } from '../context';
import {HomeContainer, Title} from './Home.styles'

export default function Home() {
    const [activePage, setActivePage] = useState(null)
    const title = useRef(null);
    const { theme } = useContext(ThemeContext);
    const {language, setLanguage} = useContext(LanguageContext);
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
            <a href='#' onClick={() => setActivePage('Register')}>{language === LANGUAGES.EN.value ? "Sign Up" : "Создать"}</a><br />
            <a href='#' onClick={() => setActivePage('Login')}>{language === LANGUAGES.EN.value ? "Sign In" : "Войти"}</a>
        </div>

        {activePage === 'Register' && <RegisterForm onCancel={() => setActivePage(null)}/>}
        {activePage === 'Login' && <LoginForm/>}
        
    </HomeContainer>

  )
}
