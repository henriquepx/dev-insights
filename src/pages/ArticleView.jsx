import styled, { keyframes } from 'styled-components';

const showingText = keyframes`
  0% {
        transform: translate3d(0, 5%, 0);
        opacity: .2;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
`;

const ArticleViewContainer = styled.div`
    margin: 1.5rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    animation: ${showingText} 2s ease-in-out;
    h1 {
        text-align: center;
        color: #000;
        font-weight: 600;
        font-size: 1.8rem;
        max-width: 30ch;
    }
    p {
        margin-bottom: 1rem;
        font-size: .8rem;
    }
`
const ImgBg = styled.img`
  border-radius: 20px;
  width: 65%;
`
const ImgRedes = styled.img`
  width: 35px;
  margin: 0 4px;
`
const DescriptionArticleView = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  margin-top: 4rem;

  display: flex;
`
const ShareArticle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
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
`

const ArticleView = () => {
  return (
    <ArticleViewContainer>
      <h1>Qual melhor Framework após aprender JavaScript?</h1>
      <p>20/02/2024</p>
      <ImgBg src="/angualrvuereact.png" alt="Wallpaper Angular x React x Vue" />
      <DescriptionArticleView>
        <ShareArticle>
          <p>Compartilhar artigo</p>
          <div>
            <a href="#"><ImgRedes src="/twitter.svg" alt="" /></a>
            <a href="#"><ImgRedes src="/linkedin.svg" alt="" /></a>
            <a href="#"><ImgRedes src="/instagram.svg" alt="" /></a>
          </div>
        </ShareArticle>
        <TextsArticle>
          <p>1. React: A Deusa da Reatividade</p>
          <p>React, desenvolvido pelo Facebook, é um framework que revolucionou a construção de interfaces de usuário. A base do React reside na ideia de componentização, onde a interface é quebrada em componentes reutilizáveis. O Virtual DOM, uma abstração leve do DOM real, otimiza as atualizações, resultando em desempenho excepcional em aplicações de larga escala.</p>
          <p>A comunidade React é extensa e diversificada, proporcionando não apenas suporte técnico, mas também uma miríade de recursos, tutoriais e soluções para desafios comuns. A sintaxe JSX, uma extensão do JavaScript que permite a incorporação de XML/HTML, oferece uma abordagem elegante e eficiente na construção de componentes.</p>
          <p>Para começar, a Documentação Oficial do React é um guia abrangente. No Tutorial Interativo, você pode construir uma aplicação passo a passo, consolidando seu entendimento prático.</p>
          <p>2. Angular: O Gigante MVC</p>
          <p>Angular, mantido pelo Google, é uma escolha sólida para projetos de grande escala. Baseado no padrão de design MVC, Angular proporciona uma estrutura organizada, dividindo a aplicação em Model, View e Controller. A injeção de dependências facilita a modularização e teste de unidades.</p>
          <p>A decisão de adotar o TypeScript como linguagem principal fortalece a robustez do código, introduzindo tipagem estática. O Angular CLI simplifica a inicialização de projetos e automação de tarefas, enquanto a extensa documentação oficial oferece insights profundos em cada conceito.</p>
          <p>A Documentação Oficial do Angular é uma rica fonte de conhecimento, incluindo detalhes sobre todos os aspectos do desenvolvimento Angular. O Guia de Inicialização Rápida fornece um ponto de partida pragmático.</p>
          <p>Aproveite a modularização através de módulos e serviços. O Angular CLI, além da inicialização, facilita a geração de componentes, módulos e serviços, tornando-o uma ferramenta indispensável.</p>
          <p>3. Vue.js: A Elegância da Simplicidade</p>
          <p>Vue.js se destaca pela sua abordagem incremental e simplicidade. Desenvolvido para ser facilmente integrado em projetos existentes, Vue.js oferece reatividade eficiente, sem a complexidade de outras soluções.</p>
          <p>A flexibilidade do Vue.js é evidente em sua sintaxe limpa e na curva de aprendizado suave. O sistema de reatividade, inspirado no React, torna as atualizações de interface rápidas e eficazes. O Vue CLI agiliza a inicialização de projetos, enquanto o Vuex oferece um robusto gerenciamento de estado.</p>
          <p>A Documentação Oficial do Vue.js é um guia completo para iniciantes e desenvolvedores avançados. O Guia de Componentes explora detalhes específicos sobre construção e reutilização de componentes Vue.</p>
          <p>Para inicialização rápida, o Vue CLI oferece configurações predefinidas e personalizáveis. Em projetos mais extensos, a integração do Vuex para gerenciamento de estado centralizado é altamente recomendada.</p>
          <p>Conclusão: Rumo à Excelência no Desenvolvimento Web e Desenvolvimento Front-end</p>
          <p>Em suma, a escolha entre React, Angular e Vue.js é uma decisão estratégica que moldará sua jornada no desenvolvimento web. Aprofundar-se em cada framework é mais do que uma simples escolha técnica; é uma oportunidade de crescimento, aprendizado e domínio. A documentação oficial, comunidades online e prática constante são seus aliados nesta jornada. Ao escolher e explorar um desses frameworks, você não apenas eleva suas habilidades de desenvolvimento, mas também se torna parte de uma comunidade vibrante e inovadora. Que sua jornada seja repleta de descobertas e conquistas extraordinárias!</p>
        </TextsArticle>
      </DescriptionArticleView>
    </ArticleViewContainer>
  )
}

export default ArticleView