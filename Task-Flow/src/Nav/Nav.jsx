import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { LanguageContext, LANGUAGES, ThemeContext, THEMES } from '../context'
import { Select, Switch } from 'antd'
import styled from 'styled-components'
import { MoonFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { AuthContext } from '../context'
import { SunFilled, MoonOutlined } from '@ant-design/icons';


const WrapperNav = styled.nav`
    .navigation-light {
        background-color: #f0f0f0;
        height: 80px;
    }
    .navigation-dark {
        background-color: #242526;
        height: 80px;
    }
`

const NavBar = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;

    .navigation-light {
        background-color: wheat;
        color: red;
    }
    .nav__logo {
        font-family: "Tektur", sans-serif !important;
        font-size: 22px;
        font-weight: 500;
        span {
            color: #9000FF;
        }
    }
`

const NavSettings = styled.div`
    display: flex;
    gap: 10px;
`

const Content = styled.div`
    width: 1250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav__username {
        margin-left: 0.6rem;
        font-size: 18px;
        font-weight: 520;
    }
`

const StyledSwitch = styled(Switch)`
    background-color: #1b1b1d;
    width: 70px;
    height: 32px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    position: relative;
    .ant-switch-handle {
        width: 24px;
        height: 24px;
        top: 4px;
        background-color: ${({ checked }) => (checked ? '#FFFFFF' : '#000000')};
        border-radius: 50%;
        transition: all 0.3s ease;
        position: absolute;
    }
    .ant-switch-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        color: ${({ checked }) => (checked ? '#000000' : '#FFFFFF')};
        transition: all 0.3s ease;
        width: 100%;
        width: 100%;
        line-height: 32px;
    }

    .ant-switch-inner-unchecked {
        margin-top: 0 !important;
    }

    &.ant-switch-checked {
        background-color: #9000FF;

        &:hover {
            background-color: #9000FF !important;
        }

        .ant-switch-handle {
            background-color: #FFFFFF;
            left: calc(100% - 28px);
        }
    }
    .ant-switch-handle {
        left: 4px;
    }
`

const StyledSelect = styled(Select)`
    .ant-select-selector {
        background-color: ${({ theme }) => (theme === THEMES.LIGHT ? 'white' : '#1b1b1d')} !important; /* Цвет фона */
        color: ${({ theme }) => (theme === THEMES.LIGHT ? 'black' : 'white')}; /* Цвет текста */
        border-radius: 10px; /* Скругление углов */
        width: 70px !important;
        height: 32px !important;
        display: flex;
        align-items: center; /* Центрирование текста */
        border: 1px solid ${({ theme }) => (theme === THEMES.LIGHT ? '#d9d9d9' : '#1b1b1d')} !important; /* Цвет рамки */
    }

    .ant-select-arrow {
        color: ${({ theme }) => (theme === THEMES.LIGHT ? 'black' : 'white')}; /* Цвет стрелки */
    }

    .ant-select-dropdown {
        background-color: ${({ theme }) => (theme === THEMES.LIGHT ? 'white' : '#242526')}; /* Цвет фона выпадающего списка */
        border-radius: 8px; /* Скругление углов */
    }

    .ant-select-item {
        color: ${({ theme }) => (theme === THEMES.LIGHT ? 'black' : 'white')}; /* Цвет текста элементов */
    }

    .ant-select-item-option-selected {
        background-color: #9000FF !important; /* Цвет выбранного элемента */
    }
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
