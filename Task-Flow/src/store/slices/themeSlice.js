import { createSlice } from '@reduxjs/toolkit';
import { THEMES } from '../../constants';

const savedTheme = localStorage.getItem('currentTheme') || THEMES.LIGHT;

const initialState = {
  theme: savedTheme,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem('currentTheme', state.theme)
        },
    },
})

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;