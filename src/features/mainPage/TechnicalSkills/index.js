import { SectionHeader, StyledSection } from "./styled";

/**
 * Reusable section component for displaying content with a header
 * @param {string} headerContent - The header text to display
 * @param {React.Component} sectionContent - The content to render in the section
 */
export const Section = ({ headerContent, sectionContent }) => (
  <StyledSection>
    <SectionHeader>{headerContent}</SectionHeader>
    {sectionContent}
  </StyledSection>
);
