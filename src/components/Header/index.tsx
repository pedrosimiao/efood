import { LandingHeaderBar, RegularHeader } from './styles'

import Logo from '../Logo'
import { Link } from 'react-router-dom'

export const LandingHeader = () => {
  return (
    <>
      <LandingHeaderBar>
        <Logo />
        <div>
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </div>
      </LandingHeaderBar>
    </>
  )
}

const Header = () => {
  return (
    <>
      <RegularHeader>
        <div className="container">
          <Link to="/">Restaurantes</Link>
          <Logo />
          <p>0 produto(s) no carrinho</p>
        </div>
      </RegularHeader>
    </>
  )
}

export default Header
