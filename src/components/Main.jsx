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
  display: flex;
  flex-direction: column;
  gap: 30px;
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
          descriptionarticle={'Explore os melhores frameworks pós-JavaScript: React, Angular, Vue.js, destacando características e orientando na escolha para aprimorar habilidades de desenvolvimento web.'}
          linktoknowbetter={'#'}
        />
        <Article
          imgproject={'styledcomponents.png'}
          imgalt={'Styled Components'}
          titlearticle={'Aprenda CSS-IN-JS com Styled Components.'}
          datearticle={'01/02/2024'}
          descriptionarticle={'Explore a poderosa estilização em aplicações React com Styled Components. Aprenda CSS-IN-JS, aprimore suas habilidades e otimize o design web eficientemente.'}
          linktoknowbetter={'#'}
        />
      </AllArticles>
    </MainContainer>
  )
}

export default Main