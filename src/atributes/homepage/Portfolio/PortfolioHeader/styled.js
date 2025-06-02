import styled from "styled-components";
import { SectionHeader } from "../../SkillsSection/styled";

export const PortfolioHeaderContainer = styled.header`
    text-align: center;
`;

export const PortfolioHeaderText = styled(SectionHeader)`
    text-align: center;
    border-bottom: none;
    padding: 12px 0 8px 0;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 12px 0 16px 0;
    }
`;

export const StyledGitHub = styled.svg`
    height: auto;
    color: ${({ theme }) => theme.colors.link.hover};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 32px;
    }
`;