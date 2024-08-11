import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFF8F2',
  beige: '#FFEBD9',
  red: '#E66767'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '425px'
}

const GlobalStyleSheet = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'sans-serif';
    list-style: none;
  }

  body {
    background-color: ${colors.white};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 80%;
    }
  }
`

export default GlobalStyleSheet
