import React, { ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export function PrivateRoute(props: {}): ReactElement {
    // Check is login
    const isLogin = Boolean(localStorage.getItem('access_token'));
    if (!isLogin) return <Navigate to='/login'></Navigate>

    return <Outlet />
}
