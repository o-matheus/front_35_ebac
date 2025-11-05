import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { Container, GlobalCSS } from './styles/styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Container>
        <Header />
      </Container>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
