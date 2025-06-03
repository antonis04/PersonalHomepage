import styled from "styled-components";
import { Caption } from "../../../../common/Caption";

export const SwitcherContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  margin: 0;
  padding: 0;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const ThemeLabel = styled(Caption)`
  margin-top: 0;
  margin-bottom: 0;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`;
