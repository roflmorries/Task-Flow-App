import { createContext } from "react";


export const AuthContext = createContext({});

export const LanguageContext = createContext(LANGUAGES.EN.value);

export const ThemeContext = createContext(THEMES.LIGHT);


export const LANGUAGES = {
    UA: {
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
    DARK: 'dark'
};
