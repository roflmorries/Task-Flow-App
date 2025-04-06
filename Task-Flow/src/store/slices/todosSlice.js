import { createSlice } from "@reduxjs/toolkit";

const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

const initialState = {
    todos: savedTodos,
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        editTodo: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos[index] = action.payload;
            }
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        }
    }
})

export const { setTodos, addTodo, removeTodo, editTodo} = todosSlice.actions;
export default todosSlice.reducer;