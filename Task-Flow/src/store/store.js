import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice';
import languageReducer from './slices/languageSlice';
import authReducer from './slices/authSlice';
import todosReducer from './slices/todosSlice';
 



const store = configureStore({
    reducer: {
        theme: themeReducer,
        language: languageReducer,
        auth: authReducer,
        todos: todosReducer
    }
});

export default store;