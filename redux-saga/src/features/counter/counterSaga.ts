import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from "redux-saga/effects";
import { increment } from './counterSlice';

function* log(action: PayloadAction) {
    console.log("Log action", action);
}

export default function* counterSaga() {
    yield takeEvery(increment().type, log);
}