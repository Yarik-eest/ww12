import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
// import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  background: #000;
  heigth: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position stiky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
  transition: 0.8s all easy;
  }
`

export const NavbarConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  heigth: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 110px;
`
export const NavLogo = styled(LinkR)``



