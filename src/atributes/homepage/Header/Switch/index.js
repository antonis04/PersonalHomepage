import { useDispatch, useSelector } from "react-redux";
import { SwitcherContainer, ThemeLabel } from "./styled";
import { toggleTheme } from "../../../homepageSlice";
import { ThemeButton } from "./Button";
import { selectThemeDark } from "../../../homepageSlice";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectThemeDark);

  return (
    <SwitcherContainer onClick={() => dispatch(toggleTheme())}>
      <ThemeLabel>Dark mode {isDarkTheme ? "ON" : "OFF"}</ThemeLabel>
      <ThemeButton />
    </SwitcherContainer>
  );
};
