import Game from '../../models/Game'
import { Container } from '../../styles/styles'
import Product from '../Product'
import { ContainerProducts, ListProducts, TitleSection } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => (
  <ContainerProducts background={background}>
    <Container>
      <TitleSection>{title}</TitleSection>
      <ListProducts>
        {games.map((game) => (
          <>
            <Product
              key={game.id}
              infos={game.info}
              image={game.image}
              title={game.title}
              category={game.category}
              system={game.system}
              description={game.description}
            />
          </>
        ))}
      </ListProducts>
    </Container>
  </ContainerProducts>
)

export default ProductsList
