import styled from "styled-components";
import { ExternalLink as SocialExternalLink } from "../../../Footer/Socials/styled";
import { ProjectDescription } from "../RepoCards/styled";

// Label for the link (Demo:, Code:, etc.)
export const LinkLabel = styled(ProjectDescription)`
  margin: 0;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

// Styled external link with hover effects
export const ExternalLink = styled(SocialExternalLink)`
  display: inline;
  word-break: break-all;
  color: ${({ theme }) => theme.colors.anchor.text};
  width: auto;
  transition: all 0.2s ease;
  text-decoration: underline solid 1px;
  text-decoration-color: ${({ theme }) => theme.colors.link.text};

  &:hover {
    text-decoration: underline solid 2px;
    color: ${({ theme }) => theme.colors.link.text};
    text-decoration-color: ${({ theme }) => theme.colors.link.hover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

// Container for link and label
export const LinkWrapper = styled.div`
  display: grid;
  align-items: baseline;
  grid-gap: 8px;
  grid-template-columns: auto 1fr;
  margin: 0 0 16px 0;
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  text-align: left;
  color: ${({ theme }) => theme.colors.paragraph.description};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;
