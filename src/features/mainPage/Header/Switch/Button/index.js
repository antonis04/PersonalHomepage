import { StyledThemeButton, ToggleSVG, SunSVG, ButtonWrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectThemeDark } from "../../../../homepageSlice";
import { useRefreshDisable } from "../../../../../RefreshDisable";

/**
 * Animated theme toggle button component
 */
export const ThemeButton = () => {
  const isDarkModeActive = useSelector(selectThemeDark);
  const isRefreshDisabled = useRefreshDisable();

  return (
    <StyledThemeButton>
      <ButtonWrapper>
        <ToggleSVG
          $isDark={isDarkModeActive}
          $refreshDisabled={isRefreshDisabled}
        />
        <SunSVG
          $isDark={isDarkModeActive}
          $refreshDisabled={isRefreshDisabled}
        />
      </ButtonWrapper>
    </StyledThemeButton>
  );
};
