import styled from "styled-components";
import { ReactComponent as Marker } from "../assets/svg/marker.svg";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px 32px;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontal}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.paragraph.mainParagraph};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

export const MarkerPic = styled(Marker)`
  height: 9px;
  width: 9px;
  margin-right: 16px;
`;
