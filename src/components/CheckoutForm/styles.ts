import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type ContainerProps = {
  hidden?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.beige};
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${colors.beige};
    margin-top: 8px;
  }

  .buttonsContainer {
    margin-top: 24px;

    ${ButtonContainer} {
      margin-bottom: 8px;
    }
  }
`

export const InputGroup = styled.div`
  margin-bottom: 8px;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.beige};
    margin-bottom: 8px;
    display: block;
  }

  input {
    height: 32px;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    background-color: ${colors.beige};
    border: 1px solid ${colors.beige};
    color: #4b4b4b;
    padding: 8px;
    outline: none;

    &.error {
      border: 2px solid green;
    }
  }

  &.cardNumberInput {
    input {
      width: 125%;
    }
  }

  &.cvvInput {
    input {
      width: 87px;
    }
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  gap: 32px;
`
