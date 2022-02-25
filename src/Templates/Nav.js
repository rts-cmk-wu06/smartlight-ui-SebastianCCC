//import packages
import { Link } from 'react-router-dom'
import { FaLightbulb, FaHome, FaCog } from 'react-icons/fa'

//import components
import Navicons from '../Components/Navicons'

//import icons
import Buttonbulbicon from '../Components/icons/Buttonbulbicon'
import Buttonhomeicon from '../Components/icons/Buttonhomeicon'
import Buttonsettingsicon from '../Components/icons/Buttonsettingsicon'

const Navbar = () => {
  return (
    <ul className="bg-white flex justify-evenly sticky bottom-0">
      <Navicons icon={<Buttonbulbicon />} />
      <Link to="/home">
        <Navicons icon={<Buttonhomeicon />} />
      </Link>
      <Navicons icon={<Buttonsettingsicon />} />
    </ul>
  )
}

export default Navbar
