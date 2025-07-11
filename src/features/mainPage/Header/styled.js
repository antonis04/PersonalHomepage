import styled from "styled-components";

/**
 * Main header container with responsive grid layout
 * Provides structure for avatar, profile info, and theme switcher
 */
export const MainHeaderContainer = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: center;
  align-items: center;
  max-width: 1216px;
  margin: 0 36px 72px;
  gap: 66px;
  background-color: ${({ theme }) => theme.colors.mainHeader.background};
  z-index: 1;
  transition: all 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.mobile}px`}) {
    grid-template-columns: 1fr;
    margin: 0 16px 48px;
    gap: 0;
  }
`;
