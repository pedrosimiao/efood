import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer, ButtonLink } from '../Button/styles'
import { TagContainer } from '../Tag/styles'

export const RestaurantCard = styled.div`
  color: ${colors.red};
  position: relative;
  margin-bottom: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }

  img {
    margin: 0;
    padding: 0;
    display: block;
    width: 472px;
    height: 217px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-self: center;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      height: auto;
    }
  }

  ${TagContainer} {
    margin-left: 8px;
  }

  ${ButtonContainer}, ${ButtonLink} {
    margin-bottom: 8px;
    margin-top: 16px;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const InfoContainer = styled.div`
  border: 1px solid ${colors.red};
  border-top: none;
  padding: 0 8px;
`

export const TitleScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
`
export const Score = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
    width: 21px;
    height: 21px;
  }
`
export const Description = styled.p`
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`
