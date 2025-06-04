import styled from "styled-components";

/**
 * Horizontal list container for social media links
 * Displays social icons in a flexible row layout
 */
export const SocialNetworksList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
`;

/**
 * Individual social media platform item
 * Container for each social media link
 */
export const SocialPlatformItem = styled.li`
  cursor: pointer;
`;

/**
 * External link component for social media platforms
 * Styled anchor tag with hover effects and responsive sizing
 */
export const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.link.icon};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.link.hover};
  }
`;

/**
 * Higher-order component for styling social media icons
 * Applies consistent sizing and responsive behavior
 * @param {React.Component} Icon - The icon component to style
 * @returns {styled.Component} Styled icon component
 */
export const StyledSocialIcon = (Icon) => styled(Icon)`
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
  }
`;
