import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import street from '../../assets/images/street.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    info: ['10%', 'R$250,00'],
    system: 'Windows'
  },
  {
    id: 2,
    title: 'Resident Evil 4',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    info: ['5%', 'R$290,00'],
    system: 'PS5'
  },
  {
    id: 3,
    title: 'Resident Evil 4',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    info: ['10%', 'R$250,00'],
    system: 'Windows'
  },
  {
    id: 4,
    title: 'Resident Evil 4',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    info: ['10%', 'R$250,00'],
    system: 'Windows'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Diablo IV',
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    info: ['05/04'],
    system: 'Windows'
  },
  {
    id: 6,
    title: 'The Legend of Zelda - TOK',
    category: 'Aventura',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: zelda,
    info: ['05/12'],
    system: 'Switch'
  },
  {
    id: 7,
    title: 'Street Fighter 6',
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    image: street,
    info: ['08/03'],
    system: 'PS5'
  },
  {
    id: 8,
    title: 'Star Wars Jedi Survivor',
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starWars,
    info: ['13/07'],
    system: 'PS5'
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="Ação" background="gray" />
    <ProductsList games={emBreve} title="Aventura" background="black" />
    <ProductsList games={promocoes} title="Simuladores" background="gray" />
    <ProductsList games={emBreve} title="Estratégia" background="black" />
  </>
)

export default Categories
