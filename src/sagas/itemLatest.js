import {call, put, takeLatest} from 'redux-saga/effects';
import {requestLatest, success, failure} from '../features/items/itemsSlice';
import {ApiHelper} from '../helpers';

function callGetRequest(url, data, headers) {
  return ApiHelper.get(url, data, headers);
}

function* watchRequest(action) {
  const {payload} = action;

  try {
    let response;
    response = yield call(callGetRequest, payload.uri, {});

    yield put(success(response.data));
  } catch (ex) {
    yield put(failure(ex));
  }
}

export default function* root() {
  yield takeLatest(requestLatest, watchRequest);
}
