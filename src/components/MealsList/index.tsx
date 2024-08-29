import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Meal from '../Meal'
import Button from '../Button'

import { add, open } from '../../store/reducers/cart'
import { formatPrice } from '../../utils'

import close from '../../assets/images/close.png'
import * as S from './styles'

type Props = {
  meals: Diner['cardapio']
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
      <S.Container>
        <div className="container">
          <S.List>
            {meals.map((meal) => (
              <Meal
                key={meal.id}
                image={meal.foto}
                title={meal.nome}
                description={meal.descricao}
                onDetailsClick={() => displayModal(meal)}
              />
            ))}
          </S.List>
        </div>
      </S.Container>
      {selectedMeal && (
        <S.ModalOverlay
          className={modalVisibility ? 'visible' : ''}
          onClick={closeModal}
        >
          <S.ModalContent className="container">
            <S.ModalCloseButton onClick={closeModal}>
              <img src={close} alt="Close" />
            </S.ModalCloseButton>
            <S.ModalImg src={selectedMeal.foto} alt={selectedMeal.nome} />
            <S.ModalDetails>
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
            </S.ModalDetails>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  )
}

export default MealsList
