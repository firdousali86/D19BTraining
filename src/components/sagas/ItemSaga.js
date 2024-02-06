import { take, put, call, fork } from 'redux-saga/effects';
import { request, success, failure } from '../feature/ApiItemSlice';
import apiHelper from '../api_practise/Helper';

function callGetRequest(url) {
  return apiHelper.get(url);
}

function* watchRequest() {

  console.log('saga-----------------------------')

  while (true) {
    const { payload } = yield take(request);
    
    try {
      const response = yield call(callGetRequest, payload.url);
      yield put(success(response));
    } catch (ex) {
      yield put(failure(ex));
    }
  }
}

export default function* rootSaga() {
  yield fork(watchRequest);
}
