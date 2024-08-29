import * as S from './styles'

type BannerProps = {
  capa: string
  tipo: string
  titulo: string
}

const Banner = ({ capa, tipo, titulo }: BannerProps) => (
  <S.Image style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <S.Category>{tipo}</S.Category>
      <S.Name>{titulo}</S.Name>
    </div>
  </S.Image>
)
export default Banner
