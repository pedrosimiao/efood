import styled from 'styled-components'

import { colors } from '../../styles'
import { EFood } from '../Logo/styles'
import vector from '../../assets/images/Vector.png'

export const LandingHeaderBar = styled.header`
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

  h1 {
    font-size: 36px;
    font-weight: 900;
  }

  div {
    max-width: 560px;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 40px;
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
  }

  a,
  p {
    color: ${colors.red};
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }
`
