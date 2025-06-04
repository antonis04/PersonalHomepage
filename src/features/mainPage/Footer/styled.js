import styled from "styled-components";

/**
 * Main contact section container with responsive layout
 * Provides structure for contact information and social links
 */
export const ContactSectionContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 120px 36px 100px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 64px 16px 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 48px 16px 60px;
  }
`;

/**
 * Styled email contact link with hover effects
 * Large, prominent email address for easy contact
 */
export const ContactEmailLink = styled.a`
  font-size: 32px;
  margin-top: 12px;
  margin-bottom: 24px;
  font-weight: 900;
  padding: 0;
  line-height: 1;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.footerLink.text};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.footerLink.hover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    margin: 4px 0 12px 0;
  }
`;
