import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { LanguageContext, LANGUAGES, ThemeContext, THEMES } from '../context'
import { Select, Switch } from 'antd'
import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

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

    const {theme, setTheme} = useContext(ThemeContext);
    const {language, setLanguage} = useContext(LanguageContext);

    const handleLanguageChange = value => {
        setLanguage(value)
    }

    const handleChangeTheme = checked => {
        setTheme(checked ? THEMES.LIGHT : THEMES.DARK)
    }


  return (
    <NavBar className={className}>
        <div>
        <Avatar size="large" icon={<UserOutlined />} />
        Max Lalala
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
