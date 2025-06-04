import styled from "styled-components";

// Main content wrapper with responsive design
export const MainContainer = styled.main`
  max-width: 1216px;
  min-width: 300px;
  padding: 72px 0 60px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 32px 0 24px;
  }
`;
