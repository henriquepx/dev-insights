import styled, { keyframes } from 'styled-components';
import Article from '../components/Article';
import { useTranslation } from "react-i18next";
// import Components from '../components/Components';

const showingText = keyframes`
  0% {
        opacity: 0;
    }
    100% {
      opacity: 1;
    }
`
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

  const { t } = useTranslation();

  return (
    <MainContainer>
      <h1>{t('main.title')}</h1>
      <AllArticles>
      <Article
          imgproject={'git.jpg'}
          imgalt={'Git'}
          titlearticle={t('main.mainTitleProject1')}
          descriptionarticle={t('main.mainDescriptionProject1')}
          linktoknowbetter={'gitcommands'}
        />
        {/* <Components
          titlecomponent="[Componentes] Buttons Hover CSS Effects"
          descriptioncomponent="Explore uma variedade de efeitos de CSS Hover para seus botões nesta página. De transições suaves a animações vívidas, cada efeito foi cuidadosamente criado para adicionar um toque de interatividade e estilo aos seus componentes. Encontre inspiração e aprimore a experiência do usuário com esses recursos dinâmicos."
          linkcomponent={'hovereffects'}
        /> */}
        <Article
          imgproject={'styledcomponents.png'}
          imgalt={'Styled Components'}
          titlearticle={t('main.mainTitleProject2')}
          descriptionarticle={t('main.mainDescriptionProject2')}
          linktoknowbetter={'learnstyledcomponents'}
        />
      </AllArticles>
    </MainContainer>
  )
}

export default Main