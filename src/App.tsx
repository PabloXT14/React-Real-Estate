import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './components/Main';
import { SliderData } from './data/SliderData';


function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Main slides={SliderData} />
      </BrowserRouter>
    </>
  )
}

export default App
