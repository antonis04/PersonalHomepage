import styled, { css } from "styled-components";
import { ReactComponent as Toggle } from '../../../../../../assets/svg/toggle.svg';
import { ReactComponent as Sun } from '../../../../../../assets/svg/sun.svg';

export const StyledThemeButton = styled.button`
    position: relative;
    width: 48px;
    height: 26px;
    display: flex;
    align-items:center;
    justify-content: center;
    z-index: 2;
    padding: 0;
    margin: 0;
    top: 0;
    right: 0;
    cursor: pointer;
    border: 1px solid;
    border-radius: 20px;
    overflow: hidden;
    border-color: ${({ theme }) => theme.colors.buttonWrapper.toggle};
    background-color: ${({ theme }) => theme.colors.buttonWrapper.background};
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToggleSVG = styled(Toggle)`
    position: absolute;
    transition: color 0.3s, transform 0.5s;
    color: ${({ theme }) => theme.colors.buttonWrapper.toggle};
    transform: translateX(-10px) ;

    ${({ $isDark }) => $isDark && css`
      transform: translateX(10px);
    ` };
`;

export const SunSVG = styled(Sun)`
    position: absolute;
    transition: color 0.3s, transform 0.5s;
    color: ${({ theme }) => theme.colors.buttonWrapper.sun};
    transform: translateX(-10px) ;

    ${({ $isDark }) => $isDark && css`
      transform: translateX(10px);
    ` };
`;