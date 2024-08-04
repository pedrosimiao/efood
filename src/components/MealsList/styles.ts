import styled from 'styled-components'
import { colors } from '../../styles'

import { ButtonLink } from '../Button/styles'

export const Container = styled.section`
  padding: 56px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 999;

  &.visible {
    display: flex;
  }
`
export const ModalCloseButton = styled.div`
  position: absolute;
  height: 344px;
  top: 8px;
  right: 8px;
  background: none;
  cursor: pointer;
`

export const ModalContent = styled.div`
  display: flex;
  background-color: ${colors.red};
  padding: 32px;
  position: relative;
  color: ${colors.white};
  z-index: 1000;
`

export const ModalDetails = styled.div`
  ${ButtonLink} {
    position: absolute;
    bottom: 60px;
    width: fit-content;
    padding: 4px 6px;
    font-size: 14px;
    margin-top: 16px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-top: 22px;
  }
`

export const ModalImg = styled.img`
  width: 280px;
  height: 280px;
  display: block;
  margin-right: 24px;
  object-fit: cover;
`
