const DARK_THEME_STORAGE_KEY = "darkModePreference";

export const persistThemeToStorage = (isDarkMode) =>
  localStorage.setItem(DARK_THEME_STORAGE_KEY, JSON.stringify(isDarkMode));

export const loadThemeFromStorage = () =>
  JSON.parse(localStorage.getItem(DARK_THEME_STORAGE_KEY)) || false;
