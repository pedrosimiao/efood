import Button from '../Button'
import { MealCard } from './styles'

type Props = {
  image: string
  title: string
  description: string
  onDetailsClick: () => void
}

const Meal = ({ image, title, description, onDetailsClick }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 150) {
      return description.slice(0, 150) + '...'
    }

    return description
  }

  return (
    <MealCard>
      <div className="mealImg">
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{getDescription(description)}</p>
      <Button
        type="link"
        category="meal"
        title="Mais detalhes"
        onClick={onDetailsClick}
      >
        Mais detalhes
      </Button>
    </MealCard>
  )
}

export default Meal
