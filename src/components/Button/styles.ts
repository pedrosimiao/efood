import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.category === 'meal' ? colors.beige : colors.red};
  color: ${(props) => (props.category === 'meal' ? colors.red : colors.beige)};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  width: 82px;
  height: 24px;
  padding: ${(props) => (props.category === 'meal' ? '4px auto' : '4px 6x')};
  text-decoration: none;
  border: none;
  display: inline-block;
`

export const ButtonLink = styled(Link)<Props>`
  background-color: ${(props) =>
    props.category === 'meal' ? colors.beige : colors.red};
  color: ${(props) => (props.category === 'meal' ? colors.red : colors.beige)};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  width: 82px;
  height: 24px;
  padding: ${(props) => (props.category === 'meal' ? '4px auto' : '4px 6x')};
  text-decoration: none;
  border: none;
  display: inline-block;
  text-align: center;
  padding: 4px;
`
