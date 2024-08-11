import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import {
  CartContainer,
  CartItem,
  Overlay,
  PriceContainer,
  Sidebar
} from './styles'

import Button from '../Button'
import { formatPrice } from '../MealsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (cartItemId: string) => {
    dispatch(remove(cartItemId))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.cartItemId}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
              </div>
              <button onClick={() => removeItem(item.cartItemId)}></button>
            </CartItem>
          ))}
        </ul>
        <PriceContainer>
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </PriceContainer>
        <Button title="Continuar com a entrega" category="meal" type="button">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
