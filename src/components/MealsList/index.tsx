import { useState } from 'react'

import { add, open } from '../../store/reducers/cart'

import Meal from '../Meal'
import Button from '../Button'
import { Diner } from '../../pages/Home'

import close from '../../assets/images/close.png'

import {
  Container,
  List,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalImg,
  ModalDetails
} from './styles'
import { useDispatch } from 'react-redux'

type Props = {
  meals: Diner['cardapio']
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const MealsList = ({ meals }: Props) => {
  const [selectedMeal, setSelectedMeal] = useState<Diner['cardapio'][0] | null>(
    null
  )
  const [modalVisibility, setModalVisibility] = useState(false)

  const displayModal = (meal: Diner['cardapio'][0]) => {
    setSelectedMeal(meal)
    setModalVisibility(true)
  }

  const closeModal = () => {
    setSelectedMeal(null)
    setModalVisibility(false)
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    if (selectedMeal) {
      dispatch(add(selectedMeal))
      dispatch(open())
    }
  }

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {meals.map((meal) => (
              <Meal
                key={meal.id}
                image={meal.foto}
                title={meal.nome}
                description={meal.descricao}
                onDetailsClick={() => displayModal(meal)}
              />
            ))}
          </List>
        </div>
      </Container>
      {selectedMeal && (
        <ModalOverlay
          className={modalVisibility ? 'visible' : ''}
          onClick={closeModal}
        >
          <ModalContent className="container">
            <ModalCloseButton onClick={closeModal}>
              <img src={close} alt="Close" />
            </ModalCloseButton>
            <ModalImg src={selectedMeal.foto} alt={selectedMeal.nome} />
            <ModalDetails>
              <h3>{selectedMeal.nome}</h3>
              <p>
                {selectedMeal.descricao}
                <br />
                <br />
                <br />
                Serve: de {selectedMeal.porcao}
              </p>
              <Button
                category="meal"
                title="Adicionar ao carrinho"
                type="link"
                onClick={addToCart}
              >
                Adicionar ao carrinho - {formatPrice(selectedMeal.preco)}
              </Button>
            </ModalDetails>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
}

export default MealsList
