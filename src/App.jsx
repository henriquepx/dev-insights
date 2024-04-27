import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import Preloader from './components/Preloader';
import Header from './sections/Header';
import SobreMimPage from './pages/SobreMimPage';
import LearnStyledComponents from './items/LearnStyledComponents';
import GitCommands from './items/GitCommands';
import HoverEffects from './items/HoverEffects';

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
            <Route path='/learnstyledcomponents' element={<LearnStyledComponents />} />
            <Route path='/gitcommands' element={<GitCommands />} />
            <Route path='/hovereffects' element={<HoverEffects />} />
          </Routes>
        </div>
      }
    </BrowserRouter>
  );
};

export default App;
