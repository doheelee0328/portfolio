import styled, { css } from 'styled-components'
import { theme } from '../../theme'

export const ButtonWrapper = styled.button`
  width: 200px;
  height: 55px;
  border: none;
  font-size: 20px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  -webkit-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;

  ${({ styleProps }) => css`
    background: ${styleProps.backgroundColor};
    color: ${styleProps.color};
    border: ${styleProps.border};
  `};

  :after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: ${theme.color.white};
    z-index: -1;
    -webkit-transition: width 150ms ease-in-out;
    transition: width 150ms ease-in-out;
  }
  :hover {
    color: ${theme.color.pink};
  }
  :hover:after {
    width: 110%;
  }

  @media (max-width: 815px) {
    width: 120px;
    height: 50px;
    font-size: 12px;
  }
  @media (max-width: 570px) {
    width: 100px;
    height: 30px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 50px;
    font-size: 18px;
  }
`
