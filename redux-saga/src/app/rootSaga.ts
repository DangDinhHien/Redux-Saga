import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

function* helloSaga() {
    console.log("object")
}

export default function* rootSaga() {
    console.log("First Load")
    // All call multi saga
    yield all([helloSaga(), counterSaga()]);
}