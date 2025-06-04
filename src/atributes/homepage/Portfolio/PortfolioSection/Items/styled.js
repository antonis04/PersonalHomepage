import styled from "styled-components";

export const Project = styled.li`
  list-style: none;
  padding: 48px;
  border: 6px solid;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.list.item.border};
  background-color: ${({ theme }) => theme.colors.list.item.background};
  box-shadow: 0 16px 58px 0 ${({ theme }) => theme.colors.list.item.shadowTop},
    0 -2px 50px 0 ${({ theme }) => theme.colors.list.item.shadowBottom};
  transition: 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.list.item.borderHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 100%;
    padding: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 24px;
  }
`;

export const ProjectName = styled.h3`
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.colors.header.h3};
  margin-top: 0;
  margin-bottom: 24px;
  word-break: break-all;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  display: inline-block;
  margin-top: 0;
  margin-bottom: 16px;
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
