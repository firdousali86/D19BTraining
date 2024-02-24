import {take, put, call, fork, select} from 'redux-saga/effects';
import {request, success, failure} from '../features/items/itemsSlice';

import {ApiHelper} from '../helpers';

function callGetRequest(url, data, headers) {
  return ApiHelper.get(url, data, headers);
}

function callPostRequest(url, data, headers) {
  return ApiHelper.post(url, data, headers);
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);

    try {
      let response;

      if (payload.method === 'POST') {
        //to get accesstoken from user reducer
        // const accessToken = yield select(state => state.user.data.accessToken);

        response = yield call(callPostRequest, payload.url, payload.data);
      } else {
        response = yield call(callGetRequest, payload.url, {});
      }

      yield put(success(response.data));
    } catch (ex) {
      yield put(failure(ex));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
