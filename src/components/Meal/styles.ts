import styled from 'styled-components'
import { colors } from '../../styles'

import { ButtonLink } from '../Button/styles'

export const MealCard = styled.div`
  background-color: ${colors.red};
  color: ${colors.beige};
  padding: 8px;
  margin-bottom: 32px;
  max-width: 304px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;

  .mealImg {
    width: 100%;
    height: 206px;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
    }
  }

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px;
  }

  p {
    font-size: 14px;
    margin-top: 8px;
  }

  ${ButtonLink} {
    display: block;
    text-align: center;
    width: 100%;
    margin-top: 8px;
    font-size: 14px;
    font-weight: bold;
  }
`
