class Diner {
  id: number
  image: string
  title: string
  culinary: string
  score: number
  description: string
  sugestionOfTheWeek?: boolean

  constructor(
    id: number,
    image: string,
    title: string,
    culinary: string,
    score: number,
    description: string,
    sugestionOfTheWeek?: boolean
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.sugestionOfTheWeek = sugestionOfTheWeek
    this.culinary = culinary
    this.score = score
    this.description = description
  }
}

export default Diner
