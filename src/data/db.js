//import icons
import Bedicon from '../Components/icons/Bedicon'
import Roomicon from '../Components/icons/Roomicon'
import Kitchenicon from '../Components/icons/Kitchenicon'
import Bathtubeicon from '../Components/icons/Bathtubeicon'
import Houseicon from '../Components/icons/Houseicon'
import Balconyicon from '../Components/icons/Balconyicon'

const rooms = [
  {
    title: { h: 'Bed ', b: 'room' },
    lights: 4,
    icon: <Bedicon />,
  },
  {
    title: { h: 'Living ', b: 'room' },
    lights: 2,
    icon: <Roomicon />,
  },
  {
    title: { h: 'Kitchen', b: '' },
    lights: 5,
    icon: <Kitchenicon />,
  },
  {
    title: { h: 'Bathroom', b: '' },
    lights: 1,
    icon: <Bathtubeicon />,
  },
  {
    title: { h: 'Outdoor', b: '' },
    lights: 5,
    icon: <Houseicon />,
  },
  {
    title: { h: 'Balcony', b: '' },
    lights: 2,
    icon: <Balconyicon />,
  },
]

export default rooms
