import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-size: cover;
  background-position: center;
  padding-top: 24px;
  padding-bottom: 32px;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    content: '';
  }

  .container {
    position: relative;
    z-index: 2;
  }
`
export const Name = styled.h6`
  font-weight: 900;
  font-size: 32px;
  color: #fff;
  margin-top: 156px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
  }
`

export const Category = styled.p`
  font-weight: 100;
  font-size: 32px;
  color: ${colors.white};
`
