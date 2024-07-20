import { Image, Category, Name } from './styles'

import bgPerfil from '../../assets/images/background-perfil.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bgPerfil})` }}>
    <div className="container">
      <Category>Italiana</Category>
      <Name>La Dolce Vita Trattoria</Name>
    </div>
  </Image>
)
export default Banner
