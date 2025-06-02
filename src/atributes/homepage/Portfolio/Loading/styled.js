import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from '../../../../../assets/svg/icon-spinner.svg';

const rotation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    `;

export const SpinnerSVG = styled(Spinner)`
  width: auto;
  animation: ${rotation} 1s linear normal infinite ;
  color: ${({ theme }) => theme.colors.spinner.fill} ;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 80px;
    }
`;