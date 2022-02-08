//import packages
import { useContext } from 'react'
import { useParams } from 'react-router-dom'

//import States
import { StateContext } from '../hooks/stateContext'

//import components
import Lightbulb from '../Components/icons/Lightbulb'
import Topcategory from '../Components/Topcategory'
import Topicon from '../Components/Topicon'

const Topview = () => {
  const { title } = useContext(StateContext)
  const { spantitle } = useContext(StateContext)
  let { roomid } = useParams()
  return (
    <header className="items-center justify-between flex first:px-5 sticky top-0">
      <Topcategory title={roomid ? title : 'Control'} span={roomid ? spantitle : 'Panel'} />
      {roomid ? <Lightbulb /> : <Topicon />}
    </header>
  )
}

export default Topview
