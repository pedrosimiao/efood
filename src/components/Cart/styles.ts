import styled from 'styled-components'

import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import trashCan from '../../assets/images/trashCan.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1001;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  scrollbar-track-color: ${colors.beige};
  scrollbar-width: thin;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    margin-bottom: 64px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.beige};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  list-style: none;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    display: block;

    h3 {
      color: ${colors.red};
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
    }

    p {
      margin-top: 16px;
      color: ${colors.red};
      font-weight: lighter;
      font-size: 14px;
      line-height: 22px;
    }
  }

  button {
    background-image: url(${trashCan});
    width: 24px;
    height: 24px;
    border: none;
    bottom: 0px;
    right: 0px;
    background-color: transparent;
    background-repeat: no-repeat;
    position: absolute;
    cursor: pointer;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  p {
    font-weight: bold;
    font-size: 14px;
    color: ${colors.beige};
    margin-bottom: 16px;
  }
`
