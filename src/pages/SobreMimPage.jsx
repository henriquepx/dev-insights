import styled from 'styled-components'
import Profile from '../sections/Profile'
import Main from '../sections/Main'

const ContainerSobreMim = styled.div`
  padding: 1rem 1rem 2rem 1rem;
  display: flex;
  gap: 50px;

  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1023px) {
    flex-direction: column;
    padding: 1.5rem 3rem;
  }
  @media (max-width: 600px) {
    padding: 1.5rem 1.2rem;
  }
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