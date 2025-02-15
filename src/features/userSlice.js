 // src/store/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState:{
         user: null,
     },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.user = null;
        },
    },
}); 

export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user

export default userSlice.reducer;
