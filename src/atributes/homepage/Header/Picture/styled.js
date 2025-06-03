import styled from "styled-components";

export const Picture = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 132px;
    height: 132px;
  }
`;
