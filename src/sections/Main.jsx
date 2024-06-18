import styled, { keyframes } from 'styled-components';
import Article from '../components/Article';
import { useTranslation } from "react-i18next";
import Components from '../components/Components';

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
        <Components
          titlecomponent="[Biblioteca] i18next - Internacionalização do projeto"
          descriptioncomponent="O i18next é uma biblioteca poderosa para internacionalização de projetos web. Com uma estrutura flexível e abrangente, simplifica o processo de tradução e localização de conteúdo. Sua integração simples e recursos avançados tornam-no uma escolha popular entre os desenvolvedores, permitindo uma experiência de usuário mais inclusiva e personalizada em escala global."
          linkcomponent={'i18next'}
        />
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