import styled from "styled-components";

/**
 * Main portfolio showcase section
 * Container for displaying projects with responsive layout
 */
export const ProjectShowcaseSection = styled.section`
  background-color: ${({ theme }) => theme.colors.section.portfolio.background};
  padding: 72px 0;
  margin: 0 36px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 0 16px;
  }
`;

/**
 * Loading state section for portfolio content
 * Maintains consistent styling while content loads
 */
export const LoadingDisplaySection = styled(ProjectShowcaseSection)`
  background-color: ${({ theme }) => theme.colors.section.portfolio.background};
  padding: 0 0 20px;
  margin: 0 36px;
  text-align: center;
`;

/**
 * Grid layout for portfolio projects
 * Responsive two-column grid that stacks on smaller screens
 */
export const ProjectsGrid = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.list.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
