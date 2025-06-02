import styled from "styled-components";
import { ProjectName } from "../PortfolioContainer/ProjectItem/styled";
import { HireButton } from "../../MainHeader/Profile/HireButton/styled";

export const DangerSVG = styled.svg`
    height: auto;
    margin-top: 64px;
    color: ${({ theme }) => theme.colors.header.text};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 32px;
        margin-top: 32px;
    }
`;

export const ErrorHeader = styled(ProjectName)`
    text-align: center;
    color: ${({ theme }) => theme.colors.header.text};
`;

export const GitHubButton = styled(HireButton)`
    text-align: center;
    justify-content: center;
    margin: auto;
`;