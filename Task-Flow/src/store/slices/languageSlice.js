import { createSlice } from "@reduxjs/toolkit";
import { LANGUAGES } from '../../constants';

const savedLanguage = localStorage.getItem('language') || LANGUAGES.EN.value;

const initialState = {
    language: savedLanguage,
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
            localStorage.setItem('language', state.language);
        },
    },
});


export const {setLanguage} = languageSlice.actions;
export default languageSlice.reducer;