import React, { ReactElement } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

export function PrivateRoute(props: RouteProps): ReactElement {
    // Check is login
    const isLogin = Boolean(localStorage.getItem('access_token'));
    if (!isLogin) return <Redirect to='/login'></Redirect>

    return <Route {...props}></Route>
}
