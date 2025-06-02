import { PortfolioHeaderText } from "./styled";
import { MainParagraph } from "../../../../../common/Paragraph/styled";
import { ReactComponent as GitHub } from '../../../../../assets/svg/Github.svg';
import { StyledGitHub } from "./styled";
import { PortfolioHeaderContainer } from "./styled";

export const PortfolioHeader = () => (
    <PortfolioHeaderContainer>
        <StyledGitHub as={GitHub} />
        <PortfolioHeaderText>Portfolio</PortfolioHeaderText>
        <MainParagraph>My recent projects</MainParagraph>
    </PortfolioHeaderContainer>
);