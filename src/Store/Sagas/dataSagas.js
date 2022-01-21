import { put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { GET_DATA_BEGIN, GET_DATA_SUCCESS, GET_DATA_FAIL } from "../Action/ActionTypes";

const baseUrl = "http://localhost:4000/data";

function* getData(actions) {
  const { error } = actions;
  try {
    const res = yield axios.get(baseUrl);
    console.log(res);
    yield put({
      type: GET_DATA_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_DATA_FAIL,
      error: error,
    });
    console.log(err);
  }
}

export function* watchGetData() {
  yield takeEvery(GET_DATA_BEGIN, getData);
}
