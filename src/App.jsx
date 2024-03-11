import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import Preloader from './components/Preloader';
import Header from './sections/Header';
import ArticleView from './pages/ArticleView';
import SobreMimPage from './pages/SobreMimPage';

const article1 = {
  id: 'gittutorial',
  title: 'Git: Entenda os principais comandos.',
  date: '29/02/2024',
  image: '/gitbanner.png',
  content: [
    'Desvendando os Mistérios do Git: Guia Completo para Iniciantes e Além',
    'No universo do desenvolvimento de software, o controle de versão é um pilar fundamental para a colaboração eficaz, rastreamento de alterações e garantia da integridade do código. Nesse contexto, o Git emerge como a ferramenta líder, proporcionando um robusto sistema de controle de versão distribuído.',
    'Este artigo abrange detalhadamente os principais comandos do Git, capacitando desenvolvedores iniciantes e experientes a dominarem as funcionalidades essenciais para uma gestão eficiente de projetos. Explore desde os conceitos básicos, como inicialização de repositórios e confirmação de alterações, até tópicos avançados, incluindo ramificação, mesclagem e resolução de conflitos.',
    'Principais Tópicos Abordados:',
    '1. Inicializando um Repositório: Entenda como criar um repositório Git para seu projeto e como iniciar o rastreamento de alterações.',
    '2. Confirmação de Alterações: Aprofunde-se no processo de adicionar e confirmar mudanças, acompanhado de boas práticas e mensagens significativas.',
    '3. Navegando no Histórico: Explore os comandos que oferecem insights valiosos sobre o histórico de commits, permitindo uma análise eficiente.',
    '4. Ramificação e Mesclagem: Compreenda a poderosa abordagem de ramificação do Git e as técnicas para mesclar alterações de maneira harmoniosa.',
    '5. Resolução de Conflitos: Domine as estratégias para resolver conflitos de mesclagem, garantindo a integridade do código colaborativo.',
    'Os 10 Principais Comandos do Git:',
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
    'Ao internalizar os conhecimentos proporcionados por este guia e incorporar os principais comandos do Git, você estará preparado para enfrentar os desafios do desenvolvimento colaborativo, explorando todas as potencialidades oferecidas por essa poderosa ferramenta. Não apenas aprenda comandos; absorva conceitos e estratégias que elevam sua proficiência no uso do Git. Que sua jornada neste vasto ecossistema de controle de versão seja repleta de descobertas e conquistas extraordinárias!',
  ],
  projectId: 'project1'
};

const articles = [article1];

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
