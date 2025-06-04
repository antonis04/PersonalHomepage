import { all } from "redux-saga/effects";
import { homepageSaga } from "../features/homepageSaga";

export default function* rootSaga() {
  yield all([homepageSaga()]);
}
