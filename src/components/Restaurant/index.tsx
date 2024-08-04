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
  id: number
  image: string
  title: string
  sugestionOfTheWeek?: boolean
  culinary: string
  score: number
  description: string
}

const Restaurant = ({
  id,
  image,
  title,
  sugestionOfTheWeek = false,
  culinary,
  score,
  description
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 272) {
      return description.slice(0, 269) + '...'
    }

    return description
  }

  return (
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
        <Description>{getDescription(description)}</Description>
        <Button
          type="link"
          to={`/restaurant/${id}`}
          category="restaurant"
          title={title}
        >
          Saiba mais
        </Button>
      </InfoContainer>
    </RestaurantCard>
  )
}

export default Restaurant
