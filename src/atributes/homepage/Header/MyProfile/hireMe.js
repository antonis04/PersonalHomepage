import styled from "styled-components";
import { ReactComponent as Envelope } from "../../../../assets/svg/envelope.svg";

export const HireButton = styled.a`
  display: flex;
  gap: 16px;
  width: 154px;
  height: 49px;
  padding: 12px 16px;
  margin: 8px auto 0 0;
  border: 1px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.button.text};
  background-color: ${({ theme }) => theme.colors.button.background};
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.button.backgroundHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 12px;
    margin: 0 auto 0 0;
  }
`;

export const EnvelopeSVG = styled(Envelope)`
  text-align: center;
`;
