import Button from '../Button'
import Tag from '../Tag'

import star from '../../assets/images/star-icon.png'
import * as S from './styles'

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
    if (description.length > 250) {
      return description.slice(0, 250) + '...'
    }

    return description
  }

  return (
    <S.RestaurantCard>
      <img src={image} alt={title} />
      <S.TagsContainer>
        {sugestionOfTheWeek && <Tag>Destaque da semana</Tag>}
        <Tag>{culinary}</Tag>
      </S.TagsContainer>
      <S.InfoContainer>
        <S.TitleScoreContainer>
          <S.Title>{title}</S.Title>
          <S.Score>
            <h3>{score}</h3>
            <img src={star} />
          </S.Score>
        </S.TitleScoreContainer>
        <S.Description>{getDescription(description)}</S.Description>
        <Button
          type="link"
          to={`/restaurant/${id}`}
          category="restaurant"
          title={title}
        >
          Saiba mais
        </Button>
      </S.InfoContainer>
    </S.RestaurantCard>
  )
}

export default Restaurant
