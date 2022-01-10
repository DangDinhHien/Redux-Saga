import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models";


export interface LoginPayload {
    username: string;
    password: string;
}

export interface AuthState {
    isLogin: boolean;
    logging?: boolean;
    currentUser?: User;
}

const initialState: AuthState = {
    isLogin: false,
    logging: false,
    currentUser: undefined,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) { state.logging = true },
        loginSuccess(state, action: PayloadAction<User>) { 
            state.currentUser = action.payload;
            state.logging = false;
            state.isLogin = true;
        },
        loginFailed(state, action: PayloadAction<string>) { state.logging = false },
        logout(state) {
            state.isLogin = false;
            state.currentUser = undefined;
        },
    }
})

// Actions
export const authActions = authSlice.actions;

// Selectors (Getters)
export const selectIsLogin = (state: any) => state.auth.isLogin;
export const selectLogging = (state: any) => state.auth.logging;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;