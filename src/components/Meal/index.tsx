import Button from '../Button'
import { MealCard } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Meal = ({ image, title, description }: Props) => (
  <MealCard>
    <img src={image} />
    <h2>{title}</h2>
    <p>{description}</p>
    <Button type="link" category="meal" title="Adicionar ao carrinho" to="/">
      Adicionar ao carrinho
    </Button>
  </MealCard>
)

export default Meal
