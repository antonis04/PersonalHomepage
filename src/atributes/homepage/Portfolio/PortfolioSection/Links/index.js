import { StyledLinkContainer, ProjectDescription, ProjectLink } from "./styled";

export const LinkContainer = ({ href, description }) => (
    <StyledLinkContainer>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectLink
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {href}
        </ProjectLink>
    </StyledLinkContainer>
);