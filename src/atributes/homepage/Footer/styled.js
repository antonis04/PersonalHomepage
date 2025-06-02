import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 56px 36px 0;
    text-align: left;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 32px 16px 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 32px 16px 0;
    }
`;

export const FooterEmail = styled.a`
    font-size: 32px;
    margin-top: 12px;
    margin-bottom: 24px;
    font-weight: 900;
    padding: 0;
    line-height: 1.0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.footerLink.text};
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.footerLink.hover};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        margin: 4px 0 12px 0;
    }
`;