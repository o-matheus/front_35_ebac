import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { Container, GlobalCSS } from './styles/styles'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Container>
        <Header />
      </Container>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
