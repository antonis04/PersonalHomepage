import { MainParagraph } from "../../../../common/Section";
import { LoadingSection } from "../styled";
import { PortfolioHeader } from "../HeaderSection";
import { SpinnerSVG } from "./styled";

/**
 * Loading state component with animated spinner
 */
export const Loading = () => (
  <LoadingSection>
    <PortfolioHeader />
    <MainParagraph>Please wait, projects are being loaded...</MainParagraph>
    <SpinnerSVG />
  </LoadingSection>
);
