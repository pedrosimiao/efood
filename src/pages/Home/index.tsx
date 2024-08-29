import { LandingHeader } from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'

import { useGetRestaurantQuery } from '../../services/api'

import { colors } from '../../styles'

const Home = () => {
  const { data: restaurants } = useGetRestaurantQuery()

  if (!restaurants) {
    return <h3 style={{ color: colors.red }}>Carregando...</h3>
  }

  return (
    <>
      <LandingHeader />
      <RestaurantsList diners={restaurants} />
    </>
  )
}

export default Home
