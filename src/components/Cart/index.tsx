import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import { getTotalPrice } from '../../utils'
import { formatPrice } from '../../utils'

import Button from '../Button'
import CheckoutForm from '../CheckoutForm'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const location = useLocation()

  const navigate = useNavigate()

  // Ref para armazenar a localização antes do carrinho ser aberto
  const previousLocationRef = useRef(location)

  // Atualiza a ref com a localização anterior quando o carrinho é aberto
  useEffect(() => {
    if (isOpen && location.pathname !== '/checkout') {
      previousLocationRef.current = location
    }
  }, [isOpen, location])

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (cartItemId: string) => {
    dispatch(remove(cartItemId))
  }

  // Extraindo o ID do restaurante da URL anterior
  const goToCheckout = () => {
    const restaurantId = previousLocationRef.current.pathname.split('/').pop()
    navigate('/checkout', { state: { id: restaurantId } })
  }

  // Função para voltar para a localização anterior
  const goBackToPreviousLocation = () => {
    navigate(previousLocationRef.current.pathname)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      {location.pathname !== '/checkout' ? (
        <>
          <S.Overlay onClick={closeCart} />
          <S.Sidebar>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.cartItemId}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <p>{formatPrice(item.preco)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.cartItemId)}
                      ></button>
                    </S.CartItem>
                  ))}
                </ul>
                <S.PriceContainer>
                  <p>Valor total</p>
                  <p>{formatPrice(getTotalPrice(items))}</p>
                </S.PriceContainer>
                <Button
                  title="Continuar com a entrega"
                  category="meal"
                  type="button"
                  onClick={goToCheckout}
                >
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <p className="empty-text">
                O carrinho está vazio, adicione pelo menos um produto para
                continuar com a compra
              </p>
            )}
          </S.Sidebar>
        </>
      ) : (
        <>
          <S.Overlay />
          <S.Sidebar>
            <CheckoutForm goBackToPreviousLocation={goBackToPreviousLocation} />
          </S.Sidebar>
        </>
      )}
    </S.CartContainer>
  )
}

export default Cart
