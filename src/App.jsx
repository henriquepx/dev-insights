import Main from "./components/Main";
import Profile from "./components/Profile"
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components'

const DivSeparate = styled.div`
  padding: 3rem 1rem 2rem 1rem;
  display: flex;
  gap: 50px;

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  padding: 3rem 1rem 2rem 1rem;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <DivSeparate>
        <Profile />
        <Main />
      </DivSeparate>
      
    </>
  )
}

export default App
