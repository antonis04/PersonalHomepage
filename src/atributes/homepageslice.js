import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./Homepage/themeLocalStorage";

const homepageSlice = createSlice({
    name: "myHomepage",
    initialState: {
        repositories: [],
        themeDark: getThemeFromLocalStorage(),
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
    }
});

export const { toggleTheme, fetchRepositoriesRequest, fetchRepositoriesSuccess, fetchRepositoriesFailure } = homepageSlice.actions;

export const selectThemeDark = (state) => state.homepage.themeDark;
export const selectRepositories = (state) => state.homepage.repositories;
export const selectStatus = (state) => state.homepage.status;

export const myHomepageReducer = homepageSlice.reducer; 