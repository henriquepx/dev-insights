import styled from 'styled-components'
import Profile from '../components/Profile'
import Main from '../components/Main'

const ContainerSobreMim = styled.div`
`

const SobreMimPage = () => {
  return (
    <ContainerSobreMim>
      <Profile />
      <Main />
    </ContainerSobreMim>
  )
}

export default SobreMimPage