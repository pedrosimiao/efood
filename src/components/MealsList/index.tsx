import Meal from '../Meal'
import { Container, List } from './styles'

import pizza from '../../assets/images/pizza.png'

// Hard coded list
const MealsList = () => (
  <>
    <Container>
      <div className="container">
        <List>
          <Meal
            image={pizza}
            title="Pizza Marguerita"
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          />
          <Meal
            image={pizza}
            title="Pizza Marguerita"
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          />
          <Meal
            image={pizza}
            title="Pizza Marguerita"
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          />
          <Meal
            image={pizza}
            title="Pizza Marguerita"
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          />
          <Meal
            image={pizza}
            title="Pizza Marguerita"
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          />
          <Meal
            image={pizza}
            title="Pizza Marguerita"
            description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          />
        </List>
      </div>
    </Container>
  </>
)

export default MealsList
