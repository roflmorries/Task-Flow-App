import { createContext } from "react";
import { MoonFilled } from '@ant-design/icons';


export const LANGUAGES = {
    RU: {
        value: 'RU',
        text: 'Russian'
    },
    EN: {
        value: "EN",
        text: "English"
    }
}

export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
};


export const AuthContext = createContext({});

export const LanguageContext = createContext(LANGUAGES.EN.value);

export const ThemeContext = createContext(THEMES.LIGHT);