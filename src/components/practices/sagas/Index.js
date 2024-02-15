import { fork } from 'redux-saga/effects'

import items from './Items';

export default function* rootSaga() {
    yield fork(items);
}