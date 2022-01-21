import { all } from "redux-saga/effects";
import { watchGetData } from "./dataSagas";

export default function* rootSaga() {
  yield all([watchGetData()]);
}
