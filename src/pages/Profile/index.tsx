import { Navigate, useLocation, useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import MealsList from '../../components/MealsList'

import { useGetMealQuery } from '../../services/api'

import { colors } from '../../styles'

type MealParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams<MealParams>()
  const location = useLocation()

  // Definindo o restaurantId com base no id ou no state da location
  const restaurantId = id || location.state?.id

  // Chamando o hook incondicionalmente, passando o restaurantId, mesmo que seja undefined
  const { data: menu, error, isLoading } = useGetMealQuery(restaurantId || '')

  // Verificações e renderizações condicionais
  if (!restaurantId) return <Navigate to={'/'} />
  if (isLoading) return <h3 style={{ color: colors.red }}>Carregando...</h3>
  if (error)
    return (
      <h3 style={{ color: colors.red }}>
        Ocorreu um erro ao carregar os dados.
      </h3>
    )
  if (!menu) return <h3 style={{ color: colors.red }}>Carregando...</h3>

  return (
    <>
      <Header />
      <Banner capa={menu.capa} tipo={menu.tipo} titulo={menu.titulo} />
      <MealsList meals={menu.cardapio} />
    </>
  )
}

export default Profile
