import Logo from '../Logo'
import insta from '../../assets//images/instagram-round-svgrepo-com (1) 1.svg'
import fb from '../../assets//images/facebook-round-svgrepo-com 1.svg'
import x from '../../assets//images/twitter-2-svgrepo-com 1.svg'

import * as S from './styles'

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.BrandingContainer>
        <Logo />
        <S.SocialContainer>
          <img src={insta} alt="Instagram" />
          <img src={fb} alt="Facebook" />
          <img src={x} alt="Twitter" />
        </S.SocialContainer>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </p>
      </S.BrandingContainer>
    </div>
  </S.Container>
)

export default Footer
