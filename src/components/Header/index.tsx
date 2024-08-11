import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { LandingHeaderBar, RegularHeader } from './styles'
import Logo from '../Logo'

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
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <RegularHeader>
        <div className="container">
          <Link to="/">Restaurantes</Link>
          <Logo />
          <a onClick={openCart}>{items.length} produto(s) no carrinho</a>
        </div>
      </RegularHeader>
    </>
  )
}

export default Header
