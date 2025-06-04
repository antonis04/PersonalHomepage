import { MainParagraph } from "../../../../common/Section";
import { LoadingDisplaySection } from "../styled";
import { PortfolioHeader } from "../HeaderSection";
import { SpinnerSVG } from "./styled";

/**
 * Loading state component with animated spinner
 * Displays loading message and spinner while fetching portfolio data
 * @returns {JSX.Element} Loading component with spinner animation
 */
const LoadingComponent = () => {
  const loadingMessage = "Please wait, projects are being loaded...";

  return (
    <LoadingDisplaySection>
      <PortfolioHeader />
      <MainParagraph>{loadingMessage}</MainParagraph>
      <SpinnerSVG />
    </LoadingDisplaySection>
  );
};

export { LoadingComponent as Loading };
