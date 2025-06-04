import { createSlice } from "@reduxjs/toolkit";
import { loadThemeFromStorage } from "./themeLocalStorage";

const mainPageSlice = createSlice({
  name: "personalWebsite",
  initialState: {
    repositories: [],
    themeDark: loadThemeFromStorage(),
    status: "IDLE",
  },
  reducers: {
    toggleTheme: (state) => {
      state.themeDark = !state.themeDark;
    },
    fetchRepositoriesRequest: (state) => {
      state.repositories = [];
      state.status = "LOADING";
    },
    fetchRepositoriesSuccess: (state, { payload: repositories }) => {
      state.repositories = repositories;
      state.status = "SUCCESS";
    },
    fetchRepositoriesFailure: (state) => {
      state.status = "ERROR";
    },
  },
});

export const {
  toggleTheme,
  fetchRepositoriesRequest,
  fetchRepositoriesSuccess,
  fetchRepositoriesFailure,
} = mainPageSlice.actions;

export const selectThemeDark = (state) => state.homepage.themeDark;
export const selectRepositories = (state) => state.homepage.repositories;
export const selectStatus = (state) => state.homepage.status;

export const myHomepageReducer = mainPageSlice.reducer;
