import { useState, useEffect } from 'react';
import Main from "./components/Main";
import Profile from "./components/Profile"
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components'
import Preloader from './components/Preloader';

const DivSeparate = styled.div`
  padding: 3rem 1rem 2rem 1rem;
  display: flex;
  gap: 50px;

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  padding: 3rem 1rem 2rem 1rem;
`

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      
      await new Promise(resolve => setTimeout(resolve, 4000));
      setLoading(false); 
    };

    fetchData();
  }, []); 

  return (
    <div>
      {loading ? <Preloader /> :
        <div>
          <GlobalStyles />
          <DivSeparate>
            <Profile />
            <Main />
          </DivSeparate>
      </div>}
    </div>
  );
};

export default App;
