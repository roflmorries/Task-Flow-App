import styled from 'styled-components';
import { Switch, Select } from 'antd';
import { THEMES } from '../context';

export const WrapperNav = styled.nav`
    .navigation-light {
        background-color: #f0f0f0;
        height: 80px;
    }
    .navigation-dark {
        background-color: #242526;
        height: 80px;
    }
`

export const NavBar = styled.div`

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

export const NavSettings = styled.div`
    display: flex;
    gap: 10px;
`

export const Content = styled.div`
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

export const StyledSwitch = styled(Switch)`
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

export const StyledSelect = styled(Select)`
    .ant-select-selector {
        background-color: ${({ theme }) => (theme === THEMES.LIGHT ? 'white' : '#1b1b1d')} !important;
        color: ${({ theme }) => (theme === THEMES.LIGHT ? 'black' : 'white')};
        border-radius: 10px;
        width: 70px !important;
        height: 32px !important;
        display: flex;
        align-items: center;
        border: 1px solid ${({ theme }) => (theme === THEMES.LIGHT ? '#d9d9d9' : '#1b1b1d')} !important;
    }

    .ant-select-arrow {
        color: ${({ theme }) => (theme === THEMES.LIGHT ? 'black' : 'white')};
    }

    .ant-select-dropdown {
        background-color: ${({ theme }) => (theme === THEMES.LIGHT ? 'white' : '#242526')};
        border-radius: 8px;
    }

    .ant-select-item {
        color: ${({ theme }) => (theme === THEMES.LIGHT ? 'black' : 'white')};
    }

    .ant-select-item-option-selected {
        background-color: #9000FF !important;
    }
`