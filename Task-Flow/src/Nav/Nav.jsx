import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { LanguageContext, LANGUAGES, ThemeContext, THEMES } from '../context'
import { Select, Switch } from 'antd'
import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { AuthContext } from '../context'

const NavBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const NavSettings = styled.div`
    display: flex;
`



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
    console.log(isAuth)
    console.log(CurrentUser)


  return (
    <NavBar className={className}>
        <div>
            {CurrentUser && CurrentUser.avatar ? (
                <Avatar size="large" src={CurrentUser.avatar} />
            ) : (
                <Avatar size="large" icon={<UserOutlined />} />
            )}
            <span style={{ marginLeft: 10 }}>
                    {CurrentUser ? CurrentUser.login : 'Guest'}
                </span>
        </div>

        <div>Task Flow</div>

        <NavSettings>
            <div>
                <Select
                value={language}
                slyle={{width: 120}}
                onChange={handleLanguageChange}
                options={[
                    {value: LANGUAGES.EN.value, label: LANGUAGES.EN.text},
                    {value: LANGUAGES.RU.value, label: LANGUAGES.RU.text}
                ]}
                />
            </div>

            <div>
                <Switch
                checkedChildren={THEMES.LIGHT}
                unCheckedChildren={THEMES.DARK}
                onChange={handleChangeTheme}
                checked={theme === THEMES.LIGHT}
                />
            </div>
        </NavSettings>
        
    </NavBar>
  )
}
