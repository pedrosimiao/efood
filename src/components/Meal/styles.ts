import styled from 'styled-components'
import { colors } from '../../styles'

import { ButtonLink } from '../Button/styles'

export const MealCard = styled.div`
  background-color: ${colors.red};
  color: ${colors.beige};
  padding: 8px;
  margin-bottom: 32px;

  .mealImg {
    width: 304px;
    height: 206px;
    display: flex;
    justify-content: center;

    img {
      max-width: 304px;
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
    width: 304px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: bold;
  }
`
