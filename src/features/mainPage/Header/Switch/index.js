import { useDispatch, useSelector } from "react-redux";
import { SwitcherContainer, ThemeLabel } from "./styled";
import { toggleTheme } from "../../../homepageSlice";
import { ThemeButton } from "./Button";
import { selectThemeDark } from "../../../homepageSlice";

/**
 * Theme switcher component with toggle functionality
 */
export const ThemeSwitcher = () => {
  const reduxDispatch = useDispatch();
  const isDarkThemeEnabled = useSelector(selectThemeDark);

  const handleThemeToggle = () => {
    reduxDispatch(toggleTheme());
  };

  return (
    <SwitcherContainer onClick={handleThemeToggle}>
      <ThemeLabel>Dark mode {isDarkThemeEnabled ? "ON" : "OFF"}</ThemeLabel>
      <ThemeButton />
    </SwitcherContainer>
  );
};
