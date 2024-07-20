import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-size: cover;
  padding-top: 24px;
  padding-bottom: 32px;
`
export const Name = styled.h6`
  font-weight: 900;
  font-size: 32px;
  color: #fff;
  margin-top: 156px;
`

export const Category = styled.p`
  font-weight: 100;
  font-size: 32px;
  color: ${colors.white};
`
