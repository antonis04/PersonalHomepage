import styled from "styled-components";

export const PortfolioSection = styled.section`
    background-color: ${({ theme }) => theme.colors.section.portfolio.background} ;
    padding: 0;
    margin: 0 36px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      margin: 0 16px;
    }
`;

export const LoadingSection = styled(PortfolioSection)`
    background-color: ${({ theme }) => theme.colors.section.portfolio.background} ;
    padding: 0 0 20px;
    margin: 0 36px;
    text-align: center;
`;

export const PortfolioList = styled.ul`
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.list.background};

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        display: flex;
        flex-direction: column;
        gap: 16px;
  }
`;