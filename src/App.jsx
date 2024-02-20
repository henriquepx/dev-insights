import { useState, useEffect } from 'react';
import Main from "./components/Main";
import Profile from "./components/Profile"
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components'
import Preloader from './components/Preloader';
import Header from './components/Header';

const DivSeparate = styled.div`
  padding: 1rem 1rem 2rem 1rem;
  display: flex;
  gap: 50px;

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1023px) {
    flex-direction: column;
    padding: 1.5rem 3rem;
  }
  @media (max-width: 600px) {
    padding: 1.5rem 1.2rem;
  }
`

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
    <div>
      {loading ? <Preloader /> :
        <div>
          <GlobalStyles />
          <Header />
          <DivSeparate>
            <Profile />
            <Main />
          </DivSeparate>
      </div>}
    </div>
  );
};

export default App;
