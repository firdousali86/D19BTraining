import { take, put, call, fork } from "redux-saga/effects";

import { request, success, failure } from "../redux/features/Items/itemSlice";

import { ApiHelper } from "../../master/Helper";

function callGetRequest(url, data, headers) {
    return ApiHelper.get(url, data, headers);
}

function* watchRequest() {
    while (true) {
        const { payload } = yield take(request);
        try {
            let response;
            response = yield call(callGetRequest, payload.url, {});
            yield put(success(response));
        } catch (Exception) {
            yield put(failure(Exception));
        }
    }
}

export default function* root() {
    yield fork(watchRequest);
}