import { call, delay, select, takeEvery, takeLatest } from "redux-saga/effects";
import { getUserRepositories } from "./homepageAPI";
import { fetchRepositoriesFailure, fetchRepositoriesRequest, fetchRepositoriesSuccess, toggleTheme } from "./Homepage/homepageSlice";
import { put } from "redux-saga/effects";
import { selectThemeDark } from "./Homepage/homepageSlice";
import { saveThemeInLocalStorage } from "./Homepage/themeLocalStorage";

function* getGitHubRepositoryHandler({ payload: username }) {
    try {
        yield delay(2000);
        const repositories = yield call(getUserRepositories, username);
        yield put(fetchRepositoriesSuccess(repositories));
    }
    catch (error) {
        yield put(fetchRepositoriesFailure());
        throw error;
    }
}

function* setThemeInLocalStorageHandler() {
    const darkTheme = yield select(selectThemeDark);
    yield call(saveThemeInLocalStorage, darkTheme);
}

export function* homepageSaga() {
    yield takeEvery(fetchRepositoriesRequest.type, getGitHubRepositoryHandler);
    yield takeLatest(toggleTheme.type, setThemeInLocalStorageHandler);
}