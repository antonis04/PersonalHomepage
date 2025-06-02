import { PortfolioSection } from "../styled";
import { PortfolioList } from "../styled";
import { useSelector } from "react-redux";
import { selectRepositories } from "../../../homepageSlice";
import { ProjectItem } from "./ProjectItem";
import { PortfolioHeader } from "../PortfolioHeader";

export const PortfolioContainer = () => {
    const repositories = useSelector(selectRepositories);

    return (
        <PortfolioSection>
            <PortfolioHeader />
            <PortfolioList>
                {repositories.map((project, index) =>
                    <ProjectItem key={index} project={project} />)}
            </PortfolioList>
        </PortfolioSection >
    )
};