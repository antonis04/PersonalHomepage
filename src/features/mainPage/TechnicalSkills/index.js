import { SectionHeader, StyledSection } from "./styled";

/**
 * Reusable section component for displaying content with a header
 * Input: headerContent - The header text to display
 * Input: sectionContent - The content to render in the section
 */
export const Section = ({ headerContent, sectionContent }) => (
  <StyledSection>
    <SectionHeader>{headerContent}</SectionHeader>
    {sectionContent}
  </StyledSection>
);
