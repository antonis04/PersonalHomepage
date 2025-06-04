import { LoadingDisplaySection } from "../styled";
import { PortfolioHeader } from "../HeaderSection";
import { MainParagraph } from "../../../../common/Section";
import { DangerSVG, ErrorHeader } from "./styled";
import { GitHubButton } from "./styled";
import { ReactComponent as DangerIcon } from "../../../../assets/svg/danger.svg";
import GitHubPath from "../../../../assets/GitHubPath";

/**
 * Error state component for portfolio loading failures
 * Displays error message and fallback GitHub link
 * Output: Error component with recovery options
 */
const PortfolioErrorComponent = () => {
  const errorTitle = "Ooops! Something went wrong...";
  const errorMessage =
    "Sorry, failed to load Github projects. \n" +
    "You can check them directly on Github.";
  const githubButtonText = "Go to GitHub";
  const githubButtonTitle = "antonis04 repositories";

  return (
    <LoadingDisplaySection>
      <PortfolioHeader />
      <DangerSVG as={DangerIcon} />
      <ErrorHeader>{errorTitle}</ErrorHeader>
      <MainParagraph>
        {errorMessage.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index === 0 && <br />}
          </span>
        ))}
      </MainParagraph>
      <GitHubButton
        href={GitHubPath}
        title={githubButtonTitle}
        target="_blank"
        rel="noopener noreferrer"
      >
        {githubButtonText}
      </GitHubButton>
    </LoadingDisplaySection>
  );
};

export { PortfolioErrorComponent as LoadingError };
