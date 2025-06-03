import { StyledThemeButton, ToggleSVG, SunSVG, ButtonWrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectThemeDark } from "../../../../homepageSlice";
import { useRefreshDisable } from "../../../../../RefreshDisable";

export const ThemeButton = () => {
  const darkThemeActive = useSelector(selectThemeDark);
  const refreshDisabled = useRefreshDisable();

  return (
    <StyledThemeButton>
      <ButtonWrapper>
        <ToggleSVG
          $isDark={darkThemeActive}
          $refreshDisabled={refreshDisabled}
        />
        <SunSVG $isDark={darkThemeActive} $refreshDisabled={refreshDisabled} />
      </ButtonWrapper>
    </StyledThemeButton>
  );
};
