class Game {
  category: string
  description: string
  image: string
  info: string[]
  system: string
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    info: string[],
    system: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.info = info
    this.system = system
    this.title = title
  }
}

export default Game