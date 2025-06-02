import styled from "styled-components";

export const MainContainer = styled.main`
    max-width: 1200px;
    min-width: 300px;
    padding: 96px 0 84px;
    margin: 24px auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 10px 0 6px;
    }
`;