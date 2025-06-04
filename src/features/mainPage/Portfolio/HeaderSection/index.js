import { ProjectSectionTitle } from "./styled";
import { MainParagraph } from "../../../../common/Section";
import { ReactComponent as GitHub } from "../../../../assets/svg/Github.svg";
import { GitHubIconStyled } from "./styled";
import { ProjectsHeaderWrapper } from "./styled";

/**
 * Portfolio section header component
 * Displays GitHub icon, portfolio title, and description
 * @returns {JSX.Element} Portfolio header with branding
 */
const ProjectsHeaderComponent = () => {
  const sectionTitle = "Portfolio";
  const sectionDescription = "My recent projects";

  return (
    <ProjectsHeaderWrapper>
      <GitHubIconStyled as={GitHub} />
      <ProjectSectionTitle>{sectionTitle}</ProjectSectionTitle>
      <MainParagraph>{sectionDescription}</MainParagraph>
    </ProjectsHeaderWrapper>
  );
};

export { ProjectsHeaderComponent as PortfolioHeader };
