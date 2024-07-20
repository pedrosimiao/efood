import Restaurant from '../Restaurant'
import { Container, List } from './styles'

import Diner from '../../models/Diner'

export type Props = {
  diners: Diner[]
}

const RestaurantsList = ({ diners }: Props) => (
  <Container>
    <div className="container">
      <List>
        {diners.map((diner) => (
          <Restaurant
            key={diner.id}
            image={diner.image}
            title={diner.title}
            sugestionOfTheWeek={diner.sugestionOfTheWeek}
            culinary={diner.culinary}
            score={diner.score}
            description={diner.description}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
