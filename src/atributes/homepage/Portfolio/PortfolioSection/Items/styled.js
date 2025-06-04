import styled from "styled-components";

// Repository card container with enhanced styling
export const RepositoryCard = styled.li`
  list-style: none;
  padding: 48px;
  border: 6px solid ${({ theme }) => theme.colors.list.item.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.list.item.background};
  box-shadow: 0 16px 58px 0 ${({ theme }) => theme.colors.list.item.shadowTop},
    0 -2px 50px 0 ${({ theme }) => theme.colors.list.item.shadowBottom};
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors.list.item.borderHover};
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 100%;
    padding: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 24px;
  }
`;

// Repository title styling with enhanced typography
export const RepositoryTitle = styled.h3`
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.colors.header.h3};
  margin: 0 0 24px 0;
  word-break: break-all;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

// Project description with improved readability
export const ProjectDescription = styled.p`
  display: inline-block;
  margin: 0 0 16px 0;
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
