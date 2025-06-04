import { LoadingSection } from "../styled";
import { PortfolioHeader } from "../HeaderSection";
import { MainParagraph } from "../../../../common/Section";
import { DangerSVG, ErrorHeader } from "./styled";
import { GitHubButton } from "./styled";
import { ReactComponent as Danger } from "../../../../assets/svg/danger.svg";
import GitHubPath from "../../../../assets/GitHubPath";

/**
 * Error state component displayed when GitHub API fails
 */
export const LoadingError = () => (
  <LoadingSection>
    <PortfolioHeader />
    <DangerSVG as={Danger} />
    <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
    <MainParagraph>
      Sorry, failed to load Github projects. <br />
      You can check them directly on Github.
    </MainParagraph>
    <GitHubButton
      href={GitHubPath}
      title={"antonis04 repositories"}
      target="_blank"
      rel="noopener noreferrer"
    >
      Go to GitHub
    </GitHubButton>
  </LoadingSection>
);
