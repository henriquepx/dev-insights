import styled, { keyframes } from 'styled-components';
import Article from './Article'

const showingText = keyframes`
  0% {
        opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const MainContainer = styled.div`
    h1 {
        font-size: 4rem;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
        margin: 2.5rem 0rem 1rem 1rem;
        animation: ${showingText} 1.4s ease-in-out;
        @media (max-width: 630px) {
          font-size: 2rem;
          margin: 2.5rem 0rem 1rem 0rem;
       }   
    }
`
const AllArticles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 630px) {
    gap: 50px;
  }   
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
          descriptionarticle={'Explore os melhores frameworks pós-JavaScript: React, Angular, Vue.js, destacando características e orientando na escolha para aprimorar habilidades de desenvolvimento web.'}
          linktoknowbetter={'reactxangularxvue'}
        />
        <Article
          imgproject={'styledcomponents.png'}
          imgalt={'Styled Components'}
          titlearticle={'Aprenda CSS-IN-JS com Styled Components.'}
          descriptionarticle={'Explore a poderosa estilização em aplicações React com Styled Components. Aprenda CSS-IN-JS, aprimore suas habilidades e otimize o design web eficientemente.'}
          linktoknowbetter={'#'}
        />
      </AllArticles>
    </MainContainer>
  )
}

export default Main