import React from 'react'
import { useEffect, useState } from 'react'
import { MoonFilled, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { SunFilled } from '@ant-design/icons';
import { WrapperNav, NavBar, NavSettings, Content, StyledSwitch, StyledSelect } from './Nav.styles'
import {useDispatch, useSelector} from 'react-redux'
import { setTheme } from '../store/slices/themeSlice'
import { setLanguage } from '../store/slices/languageSlice'
import { THEMES, LANGUAGES } from '../constants'




export default function Nav() {
    const defaultClassName = 'navigation';
    const [className, setClassName] = useState(defaultClassName);
    const theme = useSelector((state) => state.theme.theme);
    const language = useSelector((state) => state.language.language);
    const isAuth = useSelector((state) => state.auth.user !== null);
    const users = useSelector((state) => state.auth.users)
    const dispatch = useDispatch();

    const handleLanguageChange = value => {
        dispatch(setLanguage(value))
    }

    const handleChangeTheme = checked => {
        dispatch(setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT))
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
