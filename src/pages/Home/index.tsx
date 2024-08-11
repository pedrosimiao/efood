import { LandingHeader } from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'

import { useGetRestaurantQuery } from '../../services/api'

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
  // const { data: restaurants, isLoading } = useGetRestaurantQuery()
  const { data: restaurants } = useGetRestaurantQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <LandingHeader />
      <RestaurantsList diners={restaurants} />
    </>
  )
}

export default Home
