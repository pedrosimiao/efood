import Logo from '../Logo'
import insta from '../../assets//images/instagram-round-svgrepo-com (1) 1.svg'
import fb from '../../assets//images/facebook-round-svgrepo-com 1.svg'
import x from '../../assets//images/twitter-2-svgrepo-com 1.svg'

import { BrandingContainer, Container, SocialContainer } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <BrandingContainer>
        <Logo />
        <SocialContainer>
          <img src={insta} alt="Instagram" />
          <img src={fb} alt="Facebook" />
          <img src={x} alt="Twitter" />
        </SocialContainer>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </p>
      </BrandingContainer>
    </div>
  </Container>
)

export default Footer
