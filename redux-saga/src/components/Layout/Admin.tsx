import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice'
import React, { ReactElement } from 'react'

export function Admin(): ReactElement {
    const dispatch = useAppDispatch();

    const handleLogoutClick = () => {
        dispatch(authActions.logout())
    }

    return (
        <div>
            Admin
            <button onClick={handleLogoutClick} >
                Logout
            </button>
        </div>
    )
}
