import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFF8F2',
  beige: '#FFEBD9',
  red: '#E66767'
}

const GlobalStyleSheet = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'sans-serif';
  }

  body {
    background-color: ${colors.white};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export default GlobalStyleSheet
