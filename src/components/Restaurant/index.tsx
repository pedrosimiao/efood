import Button from '../Button'
import Tag from '../Tag'

import {
  Title,
  RestaurantCard,
  Score,
  TitleScoreContainer,
  InfoContainer,
  Description,
  TagsContainer
} from './styles'

import star from '../../assets/images/star-icon.png'

type Props = {
  image: string
  title: string
  sugestionOfTheWeek?: boolean
  culinary: string
  score: number
  description: string
}

const Restaurant = ({
  image,
  title,
  sugestionOfTheWeek = false,
  culinary,
  score,
  description
}: Props) => (
  <RestaurantCard>
    <img src={image} alt={title} />
    <TagsContainer>
      {sugestionOfTheWeek && <Tag>Destaque da semana</Tag>}
      <Tag>{culinary}</Tag>
    </TagsContainer>
    <InfoContainer>
      <TitleScoreContainer>
        <Title>{title}</Title>
        <Score>
          <h3>{score}</h3>
          <img src={star} />
        </Score>
      </TitleScoreContainer>
      <Description>{description}</Description>
      {sugestionOfTheWeek ? (
        <Button type="button" category="restaurant" title={title}>
          Saiba mais
        </Button>
      ) : (
        <Button type="link" to="/profile" category="restaurant" title={title}>
          Saiba mais
        </Button>
      )}
    </InfoContainer>
  </RestaurantCard>
)

export default Restaurant
