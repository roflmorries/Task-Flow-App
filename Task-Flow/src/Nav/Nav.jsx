import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { LanguageContext, LANGUAGES, ThemeContext, THEMES } from '../context'
import { MoonFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { AuthContext } from '../context'
import { SunFilled } from '@ant-design/icons';
import {WrapperNav, NavBar, NavSettings, Content, StyledSwitch, StyledSelect} from './Nav.styles'



export default function Nav() {
    const defaultClassName = 'navigation';
    const [className, setClassName] = useState(defaultClassName);
    const {users, isAuth} = useContext(AuthContext)
    const {theme, setTheme} = useContext(ThemeContext);
    const {language, setLanguage} = useContext(LanguageContext);

    const handleLanguageChange = value => {
        setLanguage(value)
    }

    const handleChangeTheme = checked => {
        setTheme(checked ? THEMES.LIGHT : THEMES.DARK)
    }

    const CurrentUser = isAuth ? users.find(user => user.isLoggedIn) : null;

    useEffect(() => {
        setClassName(`${defaultClassName} ${defaultClassName}-${theme}`);
      }, [theme]);

  return (

    <WrapperNav>
        <NavBar className={className}>
            <Content>
            <div>
                {CurrentUser && CurrentUser.avatar ? (
                    <Avatar size="large" src={CurrentUser.avatar} />
                ) : (
                    <Avatar size="large" icon={<UserOutlined />} />
                )}
                <span className='nav__username'>
                        {CurrentUser ? CurrentUser.login : language === LANGUAGES.EN.value ? "Guest" : "Гость"}
                    </span>
            </div>

            <div className='nav__logo'>TaskFlow<span>✓</span></div>

            <NavSettings>
                <div>
                    <StyledSelect
                    value={language}
                    slyle={{width: 120}}
                    onChange={handleLanguageChange}
                    options={[
                        {value: LANGUAGES.EN.value, label: LANGUAGES.EN.text},
                        {value: LANGUAGES.RU.value, label: LANGUAGES.RU.text}
                    ]}
                    theme={theme}
                    />
                </div>

                <div>
                    <StyledSwitch
                    checkedChildren={<SunFilled />}
                    unCheckedChildren={<MoonFilled />}
                    onChange={handleChangeTheme}
                    checked={theme === THEMES.LIGHT}
                    />
                </div>
            </NavSettings>
            </Content>
            
        </NavBar>
    </WrapperNav>
  )
}
