import Restaurant from '../Restaurant'

import { Container, List } from './styles'

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
            id={diner.id}
            image={diner.capa}
            title={diner.titulo}
            sugestionOfTheWeek={diner.destacado}
            culinary={diner.tipo}
            score={diner.avaliacao}
            description={diner.descricao}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
