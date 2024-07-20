import { BrowserRouter } from 'react-router-dom'

import GlobalStyleSheet from './styles'

import RouteTrack from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyleSheet />
      <RouteTrack />
    </BrowserRouter>
  )
}

export default App
