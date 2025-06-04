import styled from "styled-components";
import { SectionHeader } from "../../TechnicalSkills/styled";

/**
 * Header wrapper for the projects section
 * Centers content and provides structure
 */
export const ProjectsHeaderWrapper = styled.header`
  text-align: center;
`;

/**
 * Main title for the portfolio section
 * Inherits styling from SectionHeader but with custom spacing
 */
export const ProjectSectionTitle = styled(SectionHeader)`
  text-align: center;
  border-bottom: none;
  padding: 12px 0 8px 0;
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 12px 0 16px 0;
    margin: 0 0 16px 0;
  }
`;

/**
 * Styled GitHub icon for portfolio branding
 * Responsive sizing with theme-based coloring
 */
export const GitHubIconStyled = styled.svg`
  height: auto;
  color: ${({ theme }) => theme.colors.link.hover};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
  }
`;
