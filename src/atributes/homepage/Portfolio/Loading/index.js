import { MainParagraph } from "../../../../common/Section";
import { LoadingSection } from "../styled";
import { PortfolioHeader } from "../PortfolioHeader";
import { SpinnerSVG } from "./styled";

export const Loading = () => (
  <LoadingSection>
    <PortfolioHeader />
    <MainParagraph>Please wait, projects are being loaded...</MainParagraph>
    <SpinnerSVG />
  </LoadingSection>
);
