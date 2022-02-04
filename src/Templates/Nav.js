import Navicons from '../Components/Navicons'

import { FaLightbulb, FaHome, FaCog } from 'react-icons/fa'

const Navbar = () => {
  return (
    <ul className="bg-white p-5 flex justify-evenly sticky bottom-0">
      <Navicons icon={<FaLightbulb />} />
      <Navicons icon={<FaHome />} />
      <Navicons icon={<FaCog />} />
    </ul>
  )
}

export default Navbar
