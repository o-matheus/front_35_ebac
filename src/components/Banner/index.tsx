import { Container } from '../../styles/styles'
import Button from '../Button'
import Tag from '../Tag'
import { Imagem, Precos, Titulo } from './style'

const Banner = () => (
  <Imagem>
    <Container>
      <Tag size="big">Destaques do dia</Tag>
      <div>
        <Titulo>Marvel&lsquo;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          <span>De R$250,00</span> <br />
          por apenas R$99,90
        </Precos>
      </div>
      <Button
        title="Clique aqui para aprovietar a oferta!"
        type="link"
        to="/produto"
      >
        Aproveitar
      </Button>
    </Container>
  </Imagem>
)

export default Banner
