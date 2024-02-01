import styled from 'styled-components'
import Article from './Article'

const MainContainer = styled.div`
    h1 {
        font-size: 4rem;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
        margin: 2.5rem 0rem 3rem 1rem;
    }
`
const AllArticles = styled.div`

`

const Main = () => {
  return (
      <MainContainer>
      <h1>Todos os meus Artigos</h1>
      <AllArticles>
        <Article
          imgproject={'bg1.jpg'}
          imgalt={'VueJS x ReactJS x AngularJS'}
          titlearticle={'Qual melhor Framework após aprender JavaScript?'}
          datearticle={'01/02/2024'}
          descriptionarticle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat mauris eget scelerisque ultricies. Mauris efficitur gravida turpis sed facilisis. Donec ornare, lacus ac dictum sodales, tellus orci porttitor neque, nec rutrum .'}
          linktoknowbetter={'#'}
        />
      </AllArticles>
    </MainContainer>
  )
}

export default Main