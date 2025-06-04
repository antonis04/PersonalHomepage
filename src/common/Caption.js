import styled from "styled-components";

export const Caption = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.caption.text};
  margin-top: 0;
  margin-bottom: 12px;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: 0;
    margin-bottom: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 0;
    margin-bottom: 8px;
  }
`;
