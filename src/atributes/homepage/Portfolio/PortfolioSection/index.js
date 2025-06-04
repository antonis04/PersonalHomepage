import { PortfolioSection } from "../styled";
import { PortfolioList } from "../styled";
import { useSelector } from "react-redux";
import { selectRepositories } from "../../../homepageSlice";
import { RepositoryDisplayItem } from "./Items";
import { PortfolioHeader } from "../PortfolioHeader";

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
