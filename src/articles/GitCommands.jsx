import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import { useTranslation } from 'react-i18next';
import GitBanner from '/gitbanner.png'

const showingText = keyframes`
  0% {
        transform: translate3d(0, 3%, 0);
        opacity: .2;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
`
const ArticleViewContainer = styled.div`
    padding: 5rem 0rem 5rem 0rem;

    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    animation: ${showingText} .7s ease-in-out;
    @media (max-width: 500px) {
      padding-top: 2.5rem;
    }
    h1 {
      color: #000;
      font-weight: 600;
      font-size: 1.8rem;
      @media (max-width: 1023px) {
        font-size: 1rem;
      }
    }
    p {
      margin-bottom: 1rem;
      font-size: .8rem;
    }
`
const ArticleViewIntro = styled.div`
`
const ImgBg = styled.img`
  border-radius: 20px;
  width: 100%;
  @media (max-width: 1023px) {
    width: 90%;
  }
`
const ImgRedes = styled.img`
  width: 35px;
  margin: 0 4px;
`
const DescriptionArticleView = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  margin-top: 1.5rem;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  text-align: left;
`
const ShareArticle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin: 1rem 0rem 3rem 0rem;
  p {
    font-size: 1rem;
    margin: 0;
  }
`
const TextsArticle = styled.div`
  p {
    font-size: 1rem;
    max-width: 400ch;
    margin: 10px 0;
  }
  @media (max-width: 1023px) {
    margin: 20px 0;
  }
`
const LinkGoBack = styled(Link)`
  font-size: 1rem;
  color: #000;
  text-align: center; 
  &:visited {
    color: #000;
  }
`

const GitCommands = () => {

    const { t } = useTranslation();

  return (
    <ArticleViewContainer>
      <ArticleViewIntro>
        <h1>Git: Entenda os principais comandos.</h1>
        <p>29/02/2024</p>
      </ArticleViewIntro>
      <ImgBg src={GitBanner} alt="Wallpaper do Git" />
      <DescriptionArticleView>
        <TextsArticle>
                  <h2>Desvendando os Mistérios do Git: Guia Completo para Iniciantes e Além</h2>
                  <p>No universo do desenvolvimento de software, o controle de versão é um pilar fundamental para a colaboração eficaz, rastreamento de alterações e garantia da integridade do código. Nesse contexto, o Git emerge como a ferramenta líder, proporcionando um robusto sistema de controle de versão distribuído.</p>
        </TextsArticle>
        <ShareArticle>
          <p>{t('viewarticle.shareArticle')}</p>
          <div>
          <a href="" target="_blank" rel="noreferrer">
              <ImgRedes src="/twitter.svg" alt="Twitter" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <ImgRedes src="/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </ShareArticle>
        <LinkGoBack to="/">{'< Voltar para Home'}</LinkGoBack>
      </DescriptionArticleView>
      <BackToTop />
    </ArticleViewContainer>
  )
}


export default GitCommands