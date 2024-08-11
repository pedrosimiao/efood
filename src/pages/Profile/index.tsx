import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import MealsList from '../../components/MealsList'

import { useGetMealQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()

  const { data: menu } = useGetMealQuery(id!)

  if (!menu) return <h3>Carregando...</h3>

  return (
    <>
      <Header />
      <Banner capa={menu.capa} tipo={menu.tipo} titulo={menu.titulo} />
      <MealsList meals={menu.cardapio} />
    </>
  )
}

export default Profile
