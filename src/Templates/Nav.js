//import packages
import { Link } from 'react-router-dom'
import { FaLightbulb, FaHome, FaCog } from 'react-icons/fa'

//import components
import Navicons from '../Components/Navicons'

const Navbar = () => {
  return (
    <ul className="bg-white flex justify-evenly sticky bottom-0">
      <Navicons icon={<FaLightbulb />} />
      <Link to="/home">
        <Navicons icon={<FaHome />} />
      </Link>
      <Navicons icon={<FaCog />} />
    </ul>
  )
}

export default Navbar
