import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'
import { EFood } from '../Logo/styles'
import vector from '../../assets/images/Vector.png'

export const LandingHeaderBar = styled.header`
  width: 100%;
  background-color: ${colors.beige};
  color: ${colors.red};
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-image: url(${vector});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: normal;

  @media (max-width: ${breakpoints.tablet}) {
    height: 256px;
  }

  h1 {
    font-size: 36px;
    font-weight: 900;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 28px;
    }
  }

  div {
    max-width: 560px;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 40px;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 0 24px 0 24px;
      bottom: 24px;
    }
  }

  ${EFood} {
    margin-top: 40px;
  }
`

export const RegularHeader = styled.header`
  background-color: ${colors.beige};
  color: ${colors.red};
  height: 136px;
  padding-top: 32px;
  background-image: url(${vector});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: normal;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakpoints.mobile}) {
      margin: 0 auto;

      img {
        margin-left: 12px;
        margin-right: 12px;
      }
    }
  }

  a {
    color: ${colors.red};
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 16px;
    }
  }
`
