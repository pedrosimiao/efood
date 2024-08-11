import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import RouteTrack from './routes'
import { store } from './store'

import GlobalStyleSheet from './styles'

import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyleSheet />
        <RouteTrack />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
