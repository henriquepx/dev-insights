import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import Preloader from './components/Preloader';
import Header from './components/Header';
import ArticleView from './pages/ArticleView';
import SobreMimPage from './pages/SobreMimPage';

const article1 = {
  id: 'reactxangularxvue',
  title: 'Qual melhor Framework após aprender JavaScript?',
  date: '20/02/2024',
  image: '/angualrvuereact.png',
  content: [
    '1. React: A Deusa da Reatividade',
    'React, desenvolvido pelo Facebook, é um framework que revolucionou a construção de interfaces de usuário. A base do React reside na ideia de componentização, onde a interface é quebrada em componentes reutilizáveis. O Virtual DOM, uma abstração leve do DOM real, otimiza as atualizações, resultando em desempenho excepcional em aplicações de larga escala.',
    'A comunidade React é extensa e diversificada, proporcionando não apenas suporte técnico, mas também uma miríade de recursos, tutoriais e soluções para desafios comuns. A sintaxe JSX, uma extensão do JavaScript que permite a incorporação de XML/HTML, oferece uma abordagem elegante e eficiente na construção de componentes.',
    'Para começar, a Documentação Oficial do React é um guia abrangente. No Tutorial Interativo, você pode construir uma aplicação passo a passo, consolidando seu entendimento prático.',
    '',
    '',
    '2. Angular: O Gigante MVC',
    'Angular, mantido pelo Google, é uma escolha sólida para projetos de grande escala. Baseado no padrão de design MVC, Angular proporciona uma estrutura organizada, dividindo a aplicação em Model, View e Controller. A injeção de dependências facilita a modularização e teste de unidades.',
    'A decisão de adotar o TypeScript como linguagem principal fortalece a robustez do código, introduzindo tipagem estática. O Angular CLI simplifica a inicialização de projetos e automação de tarefas, enquanto a extensa documentação oficial oferece insights profundos em cada conceito.',
    'A Documentação Oficial do Angular é uma rica fonte de conhecimento, incluindo detalhes sobre todos os aspectos do desenvolvimento Angular. O Guia de Inicialização Rápida fornece um ponto de partida pragmático.',
    'Aproveite a modularização através de módulos e serviços. O Angular CLI, além da inicialização, facilita a geração de componentes, módulos e serviços, tornando-o uma ferramenta indispensável.',
    '',
    '',
    '3. Vue.js: A Elegância da Simplicidade',
    'Vue.js se destaca pela sua abordagem incremental e simplicidade. Desenvolvido para ser facilmente integrado em projetos existentes, Vue.js oferece reatividade eficiente, sem a complexidade de outras soluções.',
    'A flexibilidade do Vue.js é evidente em sua sintaxe limpa e na curva de aprendizado suave. O sistema de reatividade, inspirado no React, torna as atualizações de interface rápidas e eficazes. O Vue CLI agiliza a inicialização de projetos, enquanto o Vuex oferece um robusto gerenciamento de estado.',
    'A Documentação Oficial do Vue.js é um guia completo para iniciantes e desenvolvedores avançados. O Guia de Componentes explora detalhes específicos sobre construção e reutilização de componentes Vue.',
    'Para inicialização rápida, o Vue CLI oferece configurações predefinidas e personalizáveis. Em projetos mais extensos, a integração do Vuex para gerenciamento de estado centralizado é altamente recomendada.',
    '',
    'Conclusão: Rumo à Excelência no Desenvolvimento Web e Desenvolvimento Front-end',
    'Em suma, a escolha entre React, Angular e Vue.js é uma decisão estratégica que moldará sua jornada no desenvolvimento web. Aprofundar-se em cada framework é mais do que uma simples escolha técnica; é uma oportunidade de crescimento, aprendizado e domínio. A documentação oficial, comunidades online e prática constante são seus aliados nesta jornada. Ao escolher e explorar um desses frameworks, você não apenas eleva suas habilidades de desenvolvimento, mas também se torna parte de uma comunidade vibrante e inovadora. Que sua jornada seja repleta de descobertas e conquistas extraordinárias!'
  ],
};
const article2 = {
  id: 'styledcomponents',
  title: 'Aprenda CSS-IN-JS com Styled Components.',
  date: '21/02/2024',
  image: '/styledcomponentsbanner.png',
  content: [
    'CSS-IN-JS com Styled Components: Desvendando a Magia da Estilização em React',
    '',
    'Se aventurar no vasto mundo do desenvolvimento front-end muitas vezes significa enfrentar o desafio de lidar com estilos e estilização de maneira eficiente. É nesse contexto que surge a técnica revolucionária conhecida como CSS-IN-JS, e uma das ferramentas mais poderosas para incorporá-la em projetos React é o Styled Components.',
    '',
    'O que é CSS-IN-JS?',
    '',
    'Antes de mergulharmos nas maravilhas do Styled Components, é essencial compreender o conceito por trás do CSS-IN-JS. Essa abordagem inovadora propõe a ideia de escrever estilos diretamente no escopo do JavaScript, eliminando assim a necessidade de arquivos de estilo separados. Isso não apenas simplifica a organização do código, mas também proporciona um escopo encapsulado para os estilos, evitando conflitos.',
    '',
    'Styled Components: Uma Revolução na Estilização em React',
    '',
    'Styled Components é uma biblioteca para React que leva o CSS-IN-JS a um novo patamar. Ao utilizar a sintaxe elegante e expressiva do JavaScript para definir estilos, você cria componentes React estilizados de maneira intuitiva e dinâmica.',
    '',
    'Principais Vantagens:',
    '',
    '1. Encapsulamento Natural: Cada componente Styled Components encapsula seus estilos, evitando vazamento de estilos indesejados.',
    '2. Interpolação Dinâmica: A integração perfeita de JavaScript permite interpolação dinâmica nos estilos, adaptando-se facilmente a diferentes estados e propriedades.',
    '3. Manutenção Simplificada: Com estilos próximos ao código que os utiliza, a manutenção torna-se mais intuitiva e menos propensa a erros.',
    '4. Reaproveitamento Eficiente: A reutilização de estilos é facilitada, promovendo uma abordagem DRY (Don\'t Repeat Yourself).',
    '',
    'Como Utilizar:',
    '',
    'Vamos explorar um exemplo básico de uso do Styled Components em React:',
    '',
    '```javascript',
    'import styled from \'styled-components\';',
    '',
    'const StyledButton = styled.button`',
    '  background-color: #3498db;',
    '  color: #fff;',
    '  padding: 10px 20px;',
    '  border: none;',
    '  border-radius: 5px;',
    '  cursor: pointer;',
    '',
    '  &:hover {',
    '    background-color: #2980b9;',
    '  }',
    '`;',
    '',
    'const MyComponent = () => {',
    '  return (',
    '    <div>',
    '      <h1>Explorando Styled Components</h1>',
    '      <StyledButton>Clique em Mim</StyledButton>',
    '    </div>',
    '  );',
    '};',
    '```',
    '',
    'Conclusão:',
    '',
    'Ao dominar CSS-IN-JS com Styled Components, você abre as portas para um desenvolvimento front-end mais elegante, modular e fácil de manter. Esta poderosa combinação não apenas transforma a estilização em uma experiência mais agradável, mas também impulsiona a eficiência do seu código React.',
    '',
    'Esteja preparado para explorar um novo mundo de possibilidades estilísticas enquanto eleva a qualidade e a legibilidade do seu código. Que sua jornada em Styled Components seja tão empolgante quanto os resultados visuais incríveis que você está prestes a conquistar! 🚀✨',
  ],
};
const article3 = {
  id: 'gittutorial',
  title: 'Git: Entenda os principais comandos.',
  date: '29/02/2024',
  image: '/gitbanner.png',
  content: [
    'Desvendando os Mistérios do Git: Guia Completo para Iniciantes e Além',
    '',
    'No universo do desenvolvimento de software, o controle de versão é um pilar fundamental para a colaboração eficaz, rastreamento de alterações e garantia da integridade do código. Nesse contexto, o Git emerge como a ferramenta líder, proporcionando um robusto sistema de controle de versão distribuído.',
    '',
    'Este artigo abrange detalhadamente os principais comandos do Git, capacitando desenvolvedores iniciantes e experientes a dominarem as funcionalidades essenciais para uma gestão eficiente de projetos. Explore desde os conceitos básicos, como inicialização de repositórios e confirmação de alterações, até tópicos avançados, incluindo ramificação, mesclagem e resolução de conflitos.',
    '',
    'Principais Tópicos Abordados:',
    '',
    '1. Inicializando um Repositório: Entenda como criar um repositório Git para seu projeto e como iniciar o rastreamento de alterações.',
    '2. Confirmação de Alterações: Aprofunde-se no processo de adicionar e confirmar mudanças, acompanhado de boas práticas e mensagens significativas.',
    '3. Navegando no Histórico: Explore os comandos que oferecem insights valiosos sobre o histórico de commits, permitindo uma análise eficiente.',
    '4. Ramificação e Mesclagem: Compreenda a poderosa abordagem de ramificação do Git e as técnicas para mesclar alterações de maneira harmoniosa.',
    '5. Resolução de Conflitos: Domine as estratégias para resolver conflitos de mesclagem, garantindo a integridade do código colaborativo.',
    '',
    'Os 10 Principais Comandos do Git:',
    '',
    '1. `git status`: Verifique o status atual do seu repositório, visualizando alterações pendentes e arquivos não rastreados.',
    '2. `git log`: Examine o histórico de commits, incluindo informações detalhadas sobre autor, data e mensagem de cada commit.',
    '3. `git branch`: Liste, crie ou delete branches, proporcionando uma visão clara e controle sobre o fluxo do projeto.',
    '4. `git checkout`: Mude entre branches ou reverta alterações em arquivos específicos, garantindo flexibilidade na navegação.',
    '5. `git merge`: Integre branches, combinando alterações de maneira eficiente e preservando a consistência do código.',
    '6. `git add`: Adicione modificações ao índice, preparando-as para serem confirmadas em um próximo commit.',
    '7. `git commit`: Registre alterações no repositório, documentando-as com mensagens claras e informativas.',
    '8. `git push`: Envie commits locais para um repositório remoto, sincronizando o código entre diferentes ambientes.',
    '9. `git pull`: Atualize o repositório local com as últimas alterações do repositório remoto, garantindo consistência.',
    '10. `git clone`: Clone um repositório existente, possibilitando a obtenção de uma cópia local para desenvolvimento.',
    '',
    'Ao internalizar os conhecimentos proporcionados por este guia e incorporar os principais comandos do Git, você estará preparado para enfrentar os desafios do desenvolvimento colaborativo, explorando todas as potencialidades oferecidas por essa poderosa ferramenta. Não apenas aprenda comandos; absorva conceitos e estratégias que elevam sua proficiência no uso do Git. Que sua jornada neste vasto ecossistema de controle de versão seja repleta de descobertas e conquistas extraordinárias! 🚀🔗',
  ],
};

const articles = [article1, article2, article3];

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2700));
      setLoading(false); 
    };
    fetchData();
  }, []); 

  return (
    <BrowserRouter>
      {loading ? <Preloader /> :
        <div>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path='/' element={<SobreMimPage />} />
            {articles.map((article) => (
              <Route
                key={article.id}
                path={`/${article.id}`}
                element={<ArticleView {...article} />}
              />
            ))}
          </Routes>
      </div>}
    </BrowserRouter>
  );
};

export default App;
