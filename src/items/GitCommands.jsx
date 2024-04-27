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
        <p>Este artigo abrange detalhadamente os principais comandos do Git, capacitando desenvolvedores iniciantes e experientes a dominarem as funcionalidades essenciais para uma gestão eficiente de projetos. Explore desde os conceitos básicos, como inicialização de repositórios e confirmação de alterações, até tópicos avançados, incluindo ramificação, mesclagem e resolução de conflitos.</p>
        <p>Principais Tópicos Abordados:</p>
        <p>1. Inicializando um Repositório: Entenda como criar um repositório Git para seu projeto e como iniciar o rastreamento de alterações.</p>
        <p>2. Confirmação de Alterações: Aprofunde-se no processo de adicionar e confirmar mudanças, acompanhado de boas práticas e mensagens significativas.</p>
        <p>3. Navegando no Histórico: Explore os comandos que oferecem insights valiosos sobre o histórico de commits, permitindo uma análise eficiente.</p>
        <p>4. Ramificação e Mesclagem: Compreenda a poderosa abordagem de ramificação do Git e as técnicas para mesclar alterações de maneira harmoniosa.</p>
        <p>5. Resolução de Conflitos: Domine as estratégias para resolver conflitos de mesclagem, garantindo a integridade do código colaborativo.</p>
        <p>Os 10 Principais Comandos do Git:</p>
        <p>1. <code>git status</code>: Verifique o status atual do seu repositório, visualizando alterações pendentes e arquivos não rastreados.</p>
        <p>2. <code>git log</code>: Examine o histórico de commits, incluindo informações detalhadas sobre autor, data e mensagem de cada commit.</p>
        <p>3. <code>git branch</code>: Liste, crie ou delete branches, proporcionando uma visão clara e controle sobre o fluxo do projeto.</p>
        <p>4. <code>git checkout</code>: Mude entre branches ou reverta alterações em arquivos específicos, garantindo flexibilidade na navegação.</p>
        <p>5. <code>git merge</code>: Integre branches, combinando alterações de maneira eficiente e preservando a consistência do código.</p>
        <p>6. <code>git add</code>: Adicione modificações ao índice, preparando-as para serem confirmadas em um próximo commit.</p>
        <p>7. <code>git commit</code>: Registre alterações no repositório, documentando-as com mensagens claras e informativas.</p>
        <p>8. <code>git push</code>: Envie commits locais para um repositório remoto, sincronizando o código entre diferentes ambientes.</p>
        <p>9. <code>git pull</code>: Atualize o repositório local com as últimas alterações do repositório remoto, garantindo consistência.</p>
        <p>10. <code>git clone</code>: Clone um repositório existente, possibilitando a obtenção de uma cópia local para desenvolvimento.</p>
        <p>Ao internalizar os conhecimentos proporcionados por este guia e incorporar os principais comandos do Git, você estará preparado para enfrentar os desafios do desenvolvimento colaborativo, explorando todas as potencialidades oferecidas por essa poderosa ferramenta. Não apenas aprenda comandos; absorva conceitos e estratégias que elevam sua proficiência no uso do Git. Que sua jornada neste vasto ecossistema de controle de versão seja repleta de descobertas e conquistas extraordinárias!</p>
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