import { LoadingSection } from "../styled";
import { PortfolioHeader } from "../PortfolioHeader";
import { MainParagraph } from "../../../../../common/Paragraph/styled";
import { DangerSVG, ErrorHeader } from "./styled";
import { GitHubButton } from "./styled";
import {ReactComponent as Danger} from "./../../../../../assets/svg/danger.svg";
import GitHubPath from "../../../../../assets/GitHubPath";

export const LoadingError = () => (
    <LoadingSection >
        <PortfolioHeader />
        <DangerSVG as={Danger} />
        <ErrorHeader>
            Ooops! Something went&nbsp;wrong...
        </ErrorHeader>
        <MainParagraph>
            Sorry, failed to load Github&nbsp;projects. <br />
            You can check them directly&nbsp;on&nbsp;Github.
        </MainParagraph>
        <GitHubButton
            href={GitHubPath}
            title={"Mikoli09 repositories"}
            target="_blank"
            rel="noopener noreferrer"
        >
            Go to GitHub
        </GitHubButton>
    </LoadingSection >
);