import { BrowserRouter } from 'react-router-dom'

import GlobalStyleSheet from './styles'

import RouteTrack from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyleSheet />
      <RouteTrack />
      <Footer />
    </BrowserRouter>
  )
}

export default App
