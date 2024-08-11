import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import { ButtonLink } from '../Button/styles'

export const Container = styled.section`
  padding: 56px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 0;
    margin: 0 auto;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
    grid-template-columns: 1fr;
    justify-items: center;
    margin: 0 auto;
  }
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

  @media (max-width: 425px) {
    height: 300px;
    top: 8px;
    right: 4px;
  }
`

export const ModalContent = styled.div`
  display: flex;
  background-color: ${colors.red};
  padding: 32px;
  position: relative;
  color: ${colors.white};
  z-index: 1000;

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 16px;
    align-items: center;
    height: auto;
    max-height: 80vh;
  }
`

export const ModalDetails = styled.div`
  ${ButtonLink} {
    position: absolute;
    bottom: 60px;
    width: fit-content;
    padding: 4px 6px;
    font-size: 14px;
    margin-top: 16px;

    @media (max-width: 425px) {
      position: relative;
      bottom: 16px;
      width: 100%;
      text-align: center;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 425px) {
      font-size: 16px;
      text-align: center;
    }
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-top: 22px;

    @media (max-width: 425px) {
      font-size: 12px;
      line-height: 20px;
      margin-top: 16px;
      text-align: center;
    }
  }
`

export const ModalImg = styled.img`
  width: 280px;
  height: 280px;
  display: block;
  margin-right: 24px;
  object-fit: cover;

  @media (max-width: 425px) {
    width: 240px;
    height: 240px;
    margin-right: 0;
    margin-bottom: 16px;
  }
`
