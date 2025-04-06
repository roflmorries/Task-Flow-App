import { createSlice } from "@reduxjs/toolkit";

const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
const savedUser = JSON.parse(localStorage.getItem('currentUser')) || null;

const initialState = {
    user: savedUser,
    users: savedUsers
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (action.payload) {
              state.user = action.payload;
              state.users = state.users.map((user) =>
              user.id === action.payload.id ? { ...user, isLoggedIn: true } : { ...user, isLoggedIn: false }
            );
            localStorage.setItem('currentUser', JSON.stringify(state.user));
            localStorage.setItem('users', JSON.stringify(state.users));
            }
          },
          addUser: (state, action) => {
            state.users.push(action.payload);
            localStorage.setItem('users', JSON.stringify(state.users));
          },
          logOut: (state) => {
            state.user = null;
            state.users = state.users.map((user) => ({ ...user, isLoggedIn: false }));
            localStorage.removeItem('currentUser');
            localStorage.setItem('users', JSON.stringify(state.users))
          },
    }
})

export const {setUser, logOut, addUser} = authSlice.actions;
export default authSlice.reducer;