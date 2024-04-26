import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import { useTranslation } from 'react-i18next';
import StyledComponentsBanner from '/styledcomponentsbanner.png'

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

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #636363;
  border-radius: 8px;
  z-index: 1;
  transition: 0.5s;
  margin: 1.3rem 0;
`;
const Header = styled.div`
  margin: 5px;
  margin-top: 5px;
  border-radius: 5px;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;
const Circle = styled.div`
  padding: 0 4px;
`;
const CircleDot = styled.span`
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 5px;
`;
const RedDot = styled(CircleDot)`
  background-color: #ff605c;
`;
const YellowDot = styled(CircleDot)`
  background-color: #ffbd44;
`;
const GreenDot = styled(CircleDot)`
  background-color: #00ca4e;
`;
const CodeContainer = styled.div`
  text-align: center;
  
  padding: 0 15px 10px 15px;
`;
const CodeTextarea = styled.textarea`
  width: 100%;
  height: 580px;
  resize: none;
  background-color: rgb(48, 48, 48);
  border-radius: 10px;
  border: none;
  color: white;
  padding-left: 1rem;
  &:focus {
    outline: none !important;
  }
`;
const TopSize = styled.div`
    display: flex;
    justify-content: space-between;
`;

const codeString = `
import styled from 'styled-components';

const StyledButton = styled.button\`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
  }
\`;

const MyComponent = () => {
  return (
    <div>
      <h1>Explorando Styled Components</h1>
      <StyledButton>Clique em Mim</StyledButton>
    </div>
  );
};
`;

const LearnStyledComponents = () => {

  const { t } = useTranslation();


  return (
    <ArticleViewContainer>
      <ArticleViewIntro>
        <h1>Aprenda CSS-IN-JS com Styled Components.</h1>
        <p>21/02/2024</p>
      </ArticleViewIntro>
      <ImgBg src={StyledComponentsBanner} alt="Wallpaper de Styled Components" />
      <DescriptionArticleView>
        <TextsArticle>
          <h2>CSS-IN-JS com Styled Components: Desvendando a Magia da Estilização em React</h2>
          <p>Se aventurar no vasto mundo do desenvolvimento front-end muitas vezes significa enfrentar o desafio de lidar com estilos e estilização de maneira eficiente. É nesse contexto que surge a técnica revolucionária conhecida como CSS-IN-JS, e uma das ferramentas mais poderosas para incorporá-la em projetos React é o Styled Components.</p>
          <p>O que é CSS-IN-JS?</p>
          <p>Antes de mergulharmos nas maravilhas do Styled Components, é essencial compreender o conceito por trás do CSS-IN-JS. Essa abordagem inovadora propõe a ideia de escrever estilos diretamente no escopo do JavaScript, eliminando assim a necessidade de arquivos de estilo separados. Isso não apenas simplifica a organização do código, mas também proporciona um escopo encapsulado para os estilos, evitando conflitos.</p>
          <p>Styled Components é uma biblioteca para React que leva o CSS-IN-JS a um novo patamar. Ao utilizar a sintaxe elegante e expressiva do JavaScript para definir estilos, você cria componentes React estilizados de maneira intuitiva e dinâmica.</p>
          <p>Principais Vantagens:</p>
          <ol>
            <li>
            1. Encapsulamento Natural: Cada componente Styled Components encapsula seus estilos, evitando vazamento de estilos indesejados.
            </li>
            <li>
            2. Interpolação Dinâmica: A integração perfeita de JavaScript permite interpolação dinâmica nos estilos, adaptando-se facilmente a diferentes estados e propriedades.
            </li>
            <li>
            3. Manutenção Simplificada: Com estilos próximos ao código que os utiliza, a manutenção torna-se mais intuitiva e menos propensa a erros.
            </li>
            <li>
            4. Reaproveitamento Eficiente: A reutilização de estilos é facilitada, promovendo uma abordagem DRY (Don`t Repeat Yourself).
            </li>
          </ol>
          <p>Como Utilizar:</p>
          <p>Vamos explorar um exemplo básico de uso do Styled Components em React:</p>
          <CardContainer>
            <Header>
              <TopContainer>
                <TopSize>
                  <Circle>
                    <RedDot />
                  </Circle>
                  <Circle>
                    <YellowDot />
                  </Circle>
                  <Circle>
                    <GreenDot />
                  </Circle>
                </TopSize>
              </TopContainer>
            </Header>
            <CodeContainer>
              <CodeTextarea readOnly name="code" id="code" className="area" value={codeString} />
            </CodeContainer>
          </CardContainer>
        <p>Ao dominar CSS-IN-JS com Styled Components, você abre as portas para um desenvolvimento front-end mais elegante, modular e fácil de manter. Esta poderosa combinação não apenas transforma a estilização em uma experiência mais agradável, mas também impulsiona a eficiência do seu código React</p>
        <p>Esteja preparado para explorar um novo mundo de possibilidades estilísticas enquanto eleva a qualidade e a legibilidade do seu código. Que sua jornada em Styled Components seja tão empolgante quanto os resultados visuais incríveis que você está prestes a conquistar!</p>
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


export default LearnStyledComponents