import { PortfolioSection } from "../styled";
import { PortfolioList } from "../styled";
import { useSelector } from "react-redux";
import { selectRepositories } from "../../../homepageSlice";
import { RepositoryDisplayItem } from "./RepoCards";
import { PortfolioHeader } from "../HeaderSection";

/**
 * Main portfolio section component that displays all repositories
 */
export const PortfolioContainer = () => {
  const githubRepositories = useSelector(selectRepositories);

  return (
    <PortfolioSection>
      <PortfolioHeader />
      <PortfolioList>
        {githubRepositories.map((repositoryData, idx) => (
          <RepositoryDisplayItem key={idx} repoData={repositoryData} />
        ))}
      </PortfolioList>
    </PortfolioSection>
  );
};
