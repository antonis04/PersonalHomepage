import styled from "styled-components";

/**
 * User avatar image component with responsive sizing
 * Circular profile picture that scales down on mobile devices
 */
export const AvatarImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 132px;
    height: 132px;
  }
`;
