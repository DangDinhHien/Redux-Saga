import { useAppDispatch } from 'app/hooks';
import React, { ReactElement } from 'react';
import { authActions } from '../authSlice';
import './login.css'


export default function LoginPage(): ReactElement {
    const dispatch = useAppDispatch();

    const handleLoginClick = () => {
        dispatch(authActions.login({ username: "", password: ""}))
    }

    return (
        <div className="login-page">
            <button onClick={handleLoginClick} >
                Fake Login
            </button>
        </div>
    )
}
