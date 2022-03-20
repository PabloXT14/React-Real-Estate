import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
      </BrowserRouter>
    </>
  )
}

export default App
