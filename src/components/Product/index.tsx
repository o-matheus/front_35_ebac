import Tag from '../Tag'
import { Card, InfoCard, ParagrafoCard, TituloCard } from './styles'

type ProductProps = {
  title: string // Nome jogo - Vai ser usado no título e na descrição da imagem.
  category: string // Categoria jogo
  system: string // Sistema operacional
  description: string // Descrição jogo
  infos: string[] // Array que as Tags vão usar como referência para ser geradas
  image: string // Imagem jogo
}

const Product = ({
  infos,
  image,
  title,
  category,
  system,
  description
}: ProductProps) => (
  <Card>
    <img src={image} alt={title} />
    <InfoCard>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </InfoCard>
    <TituloCard>{title}</TituloCard>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <ParagrafoCard>{description}</ParagrafoCard>
  </Card>
)

export default Product
