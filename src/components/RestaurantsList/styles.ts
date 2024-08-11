import styled from 'styled-components'

import { breakpoints } from '../../styles'

export const Container = styled.section`
  padding: 80px 0;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
    padding: 24px 0;
    margin: 0 auto;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
