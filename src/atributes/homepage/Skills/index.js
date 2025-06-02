import { SectionHeader, StyledSection } from "./styled"

export const Section = ({ headerContent, sectionContent }) => (
    <StyledSection>
        <SectionHeader>
            {headerContent}
        </SectionHeader>
        {sectionContent}
    </StyledSection>
);