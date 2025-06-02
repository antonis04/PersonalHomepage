const localStorageThemeKey = "themeDark";

export const saveThemeInLocalStorage = (darkTheme) =>
  localStorage.setItem(localStorageThemeKey, JSON.stringify(darkTheme));

export const getThemeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageThemeKey)) || false;
