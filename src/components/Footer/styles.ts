import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.beige};
  color: ${colors.red};
  width: 100%;
  height: 300px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const BrandingContainer = styled.div`
  max-width: 488px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    font-size: 10px;
    margin-top: 80px;
    line-height: 12px;
  }
`

export const SocialContainer = styled.div`
  margin-top: 32px;

  img {
    margin-right: 8px;
  }
`
