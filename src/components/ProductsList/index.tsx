import { Container } from '../../styles/styles'
import Product from '../Product'
import { ContainerProducts, ListProducts, TitleSection } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <ContainerProducts background={background}>
    <Container>
      <TitleSection>{title}</TitleSection>
      <ListProducts>
        <Product
          infos={['-10%', 'R$ 150,00']}
          image="//placehold.co/225x250"
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="Descrição do jogo"
        />
        <Product
          infos={['-10%', 'R$ 150,00']}
          image="//placehold.co/225x250"
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="Descrição do jogo"
        />
        <Product
          infos={['-10%', 'R$ 150,00']}
          image="//placehold.co/225x250"
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="Descrição do jogo"
        />
        <Product
          infos={['-10%', 'R$ 150,00']}
          image="//placehold.co/225x250"
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="Descrição do jogo"
        />
      </ListProducts>
    </Container>
  </ContainerProducts>
)

export default ProductsList
