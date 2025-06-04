import styled from "styled-components";
import { ReactComponent as Marker } from "../assets/svg/marker.svg";

// Grid layout for skills list
export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 32px;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
  line-height: 1.4;
  letter-spacing: 0.9px;
  color: ${({ theme }) => theme.colors.list.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

// Individual skill item with bullet point
export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  padding-left: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

// Styled bullet point marker
export const BulletPoint = styled(Marker)`
  margin-right: 16px;
  fill: ${({ theme }) => theme.colors.marker.fill};
`;
