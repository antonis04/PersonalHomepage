import styled from "styled-components";

// Main title/name header with responsive typography
export const NameHeader = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin: 0 0 35px 0;
  padding: 0;
  line-height: 1;
  color: ${({ theme }) => theme.colors.header.headerName};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 22px;
    margin: 0 0 16px 0;
  }
`;
