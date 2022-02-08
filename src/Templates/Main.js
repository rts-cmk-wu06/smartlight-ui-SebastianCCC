//import packages
import { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'

//import States
import { StateContext } from '../hooks/stateContext'

//import components
import Rooms from '../Components/Rooms'
import ColorSettings from '../Components/ColorSettings'

//import data
import rooms from '../data/db'

const RoomsCategory = () => {
  const { setTitle } = useContext(StateContext)
  const { setSpanTitle } = useContext(StateContext)

  let { roomid } = useParams()

  console.log(roomid)
  return (
    <main className="bg-lightgray rounded-t-3xl p-6 sticky top-0 min-h-[100vh] mt-9">
      <h2 className="pb-6">{roomid ? 'Intensity' : 'All Rooms'}</h2>
      <section className="inline-grid grid-cols-2 gap-4 w-full">
        {roomid ? (
          <ColorSettings />
        ) : (
          rooms.map((room, i) => (
            <NavLink
              to={`/home/${i}`}
              key={i}
              onClick={() => {
                setTitle(room.title)
                setSpanTitle('')
              }}
            >
              {<Rooms key={i} title={room.title} dec={room.dec} icon={room.icon} />}
            </NavLink>
          ))
        )}
      </section>
    </main>
  )
}

export default RoomsCategory
