import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import MealsList from '../../components/MealsList'

import { Diner } from '../Home'

const Profile = () => {
  const { id } = useParams()
  const [menu, setMenu] = useState<Diner | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [id])

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
