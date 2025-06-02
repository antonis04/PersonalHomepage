import { MainParagraph } from "../../../../../common/Paragraph/styled";
import { LoadingSection} from "../styled";
import { PortfolioHeader } from "../PortfolioHeader";
import { SpinnerSVG} from "./styled";

export const Loading = () => (
    <LoadingSection>
        <PortfolioHeader />
        <MainParagraph>Please wait, projects are being loaded...</MainParagraph>
        <SpinnerSVG />
    </LoadingSection>
);