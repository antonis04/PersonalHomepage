import styled from "styled-components";

export const SocialsList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
`;

export const SocialsItem = styled.li`
    cursor: pointer;
`;

export const Link = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ;
    color: ${({ theme }) => theme.colors.link.icon};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 32px;
    }

    &:hover {
        color:${({ theme }) => theme.colors.link.hover};
    }
`;

export const StyleIcon = Icon => styled(Icon)`
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 32px;
    }
`;