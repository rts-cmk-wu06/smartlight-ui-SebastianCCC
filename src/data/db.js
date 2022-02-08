//import icons
import Bedicon from '../Components/icons/Bedicon'
import Roomicon from '../Components/icons/Roomicon'
import Kitchenicon from '../Components/icons/Kitchenicon'
import Bathtubeicon from '../Components/icons/Bathtubeicon'
import Houseicon from '../Components/icons/Houseicon'
import Balconyicon from '../Components/icons/Balconyicon'

const rooms = [
  {
    title: 'Bed room',
    dec: '4 lights',
    icon: <Bedicon />,
  },
  {
    title: 'Living room',
    dec: '2 lights',
    icon: <Roomicon />,
  },
  {
    title: 'Kitchen',
    dec: '5 lights',
    icon: <Kitchenicon />,
  },
  {
    title: 'Bathroom',
    dec: '1 lights',
    icon: <Bathtubeicon />,
  },
  {
    title: 'Outdoor',
    dec: '5 lights',
    icon: <Houseicon />,
  },
  {
    title: 'Balcony',
    dec: '2 lights',
    icon: <Balconyicon />,
  },
]

export default rooms
