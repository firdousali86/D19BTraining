import {fork} from 'redux-saga/effects';

import items from './items';
import user from './user';
import itemEvery from './itemEvery';
import itemLatest from './itemLatest';

export default function* rootSaga() {
  yield fork(items);
  yield fork(user);
  yield fork(itemEvery);
  yield fork(itemLatest);
}
