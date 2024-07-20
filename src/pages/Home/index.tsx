import { LandingHeader } from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'
import Footer from '../../components/Footer'

import Diner from '../../models/Diner'

import sushi from '../../assets/images/sushi.png'
import spaghetti from '../../assets/images/spaghetti.png'

const dinersCatalog: Diner[] = [
  {
    id: 1,
    image: sushi,
    title: 'Hioki Sushi',
    culinary: 'Japonesa',
    score: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    sugestionOfTheWeek: true
  },
  {
    id: 2,
    image: spaghetti,
    title: 'La Dolce Vita Trattoria',
    culinary: 'Italiana',
    score: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    image: spaghetti,
    title: 'La Dolce Vita Trattoria',
    culinary: 'Italiana',
    score: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    image: spaghetti,
    title: 'La Dolce Vita Trattoria',
    culinary: 'Italiana',
    score: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    image: spaghetti,
    title: 'La Dolce Vita Trattoria',
    culinary: 'Italiana',
    score: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    image: spaghetti,
    title: 'La Dolce Vita Trattoria',
    culinary: 'Italiana',
    score: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <LandingHeader />
    <RestaurantsList diners={dinersCatalog} />
    <Footer />
  </>
)

export default Home
