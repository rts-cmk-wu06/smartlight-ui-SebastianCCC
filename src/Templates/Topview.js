//import packages
import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

//import States
import { StateContext } from '../hooks/stateContext'

//import data
import rooms from '../data/db'

//import components
import Lightbulb from '../Components/icons/Lightbulb'
import Topcategory from '../Components/Topcategory'
import Topicon from '../Components/Topicon'
import Arrowbackicon from '../Components/icons/Arrowbackicon'

const Topview = () => {
  /* const { title } = useContext(StateContext) */

  let { roomid } = useParams()

  const Navigate = useNavigate()
  return (
    <header className="items-center justify-between flex first:px-5 sticky top-0">
      <div
        className="items-center flex cursor-pointer"
        onClick={() => {
          Navigate('/home')
        }}
      >
        {roomid && <Arrowbackicon />}
        <Topcategory
          title={roomid ? rooms[roomid].title.h : 'Control'}
          span={roomid ? rooms[roomid].title.b : 'Panel'}
        />
      </div>
      {roomid ? <Lightbulb /> : <Topicon />}
    </header>
  )
}

export default Topview
