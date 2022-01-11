import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
    try {
        // Call api login
        yield delay(100);

        localStorage.setItem("access_token", "123");
        yield put(authActions.loginSuccess({
            id: 1,
            name: "Test Login",
        }))
        // Redirect admin
        yield put(push('/admin/dashboard'));
    } catch (error) {
        yield put(authActions.loginFailed("Wrong username or password"));
    }
}

function* handleLogout() {
    yield delay(100);
    localStorage.removeItem("access_token");
    // Redirect login
    yield put(push('/login'));
}

function* watchLoginFlow() {
    while (true) {
        const isLogin = localStorage.getItem("access_token");
        if (!isLogin) {
            // Wait action login
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        }

        // Wait action logout
        yield take(authActions.logout.type);
        // Call same as await otherwise fork
        yield call(handleLogout);
    }
}

export default function* authSaga() {
    yield fork(watchLoginFlow)
}