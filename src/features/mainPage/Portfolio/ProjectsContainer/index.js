import { ProjectShowcaseSection } from "../styled";
import { ProjectsGrid } from "../styled";
import { useSelector } from "react-redux";
import { selectRepositories } from "../../../homepageSlice";
import { RepositoryDisplayItem } from "./RepoCards";
import { PortfolioHeader } from "../HeaderSection";

/**
 * Main portfolio container component displaying GitHub repositories
 * Renders grid of project cards with repository information
 * @returns {JSX.Element} Portfolio container with project grid
 */
export const PortfolioContainer = () => {
  const githubRepositories = useSelector(selectRepositories);

  const renderRepositoryItem = (repositoryData, index) => (
    <RepositoryDisplayItem key={index} repoData={repositoryData} />
  );

  return (
    <ProjectShowcaseSection>
      <PortfolioHeader />
      <ProjectsGrid>
        {githubRepositories.map(renderRepositoryItem)}
      </ProjectsGrid>
    </ProjectShowcaseSection>
  );
};
