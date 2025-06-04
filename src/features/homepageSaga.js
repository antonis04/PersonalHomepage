import { call, delay, select, takeEvery, takeLatest } from "redux-saga/effects";
import { getUserRepositories } from "./homepageAPI";
import {
  fetchRepositoriesFailure,
  fetchRepositoriesRequest,
  fetchRepositoriesSuccess,
  toggleTheme,
} from "./homepageSlice";
import { put } from "redux-saga/effects";
import { selectThemeDark } from "./homepageSlice";
import { persistThemeToStorage } from "./themeLocalStorage";

function* fetchGitHubRepositoriesWorker({ payload: username }) {
  try {
    yield delay(2000);
    const repositoriesData = yield call(getUserRepositories, username);
    yield put(fetchRepositoriesSuccess(repositoriesData));
  } catch (error) {
    yield put(fetchRepositoriesFailure());
    throw error;
  }
}

function* saveThemePreferenceWorker() {
  const isDarkThemeActive = yield select(selectThemeDark);
  yield call(persistThemeToStorage, isDarkThemeActive);
}

export function* homepageSaga() {
  yield takeEvery(fetchRepositoriesRequest.type, fetchGitHubRepositoriesWorker);
  yield takeLatest(toggleTheme.type, saveThemePreferenceWorker);
}
