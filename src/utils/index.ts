import { CartItem } from '../store/reducers/cart'

export const getTotalPrice = (items: CartItem[]) => {
  return items.reduce((accumulator, currentItem) => {
    return (accumulator += currentItem.preco)
  }, 0)
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
