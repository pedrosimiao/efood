import { Image, Category, Name } from './styles'

type BannerProps = {
  capa: string
  tipo: string
  titulo: string
}

const Banner = ({ capa, tipo, titulo }: BannerProps) => (
  <Image style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <Category>{tipo}</Category>
      <Name>{titulo}</Name>
    </div>
  </Image>
)
export default Banner
