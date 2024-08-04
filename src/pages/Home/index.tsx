import { useEffect, useState } from 'react'

import { LandingHeader } from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'

export type Diner = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Diner[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <LandingHeader />
      <RestaurantsList diners={restaurants} />
    </>
  )
}

export default Home
